<template>
  <div class="form-control">
    <div class="relative">
      <input :id="fieldName" v-model="val"
             :class="inputClass"
             :disabled="$attrs.disabled"
             :placeholder="placeholder"
             :readonly="$attrs.readonly"
             :type="showPassword?'text':type"
             class="peer block w-full appearance-none rounded-lg border border-color-border bg-transparent px-2.5 pb-2.5 pt-4 text-base font-semibold text-text1 focus:border-color-border focus:outline-none focus:ring-0 placeholder:text-base placeholder:text-text2 placeholder:font-normal"
             @focus="shouldCheckInput = true"
      />
      <label
          v-if="label"
          :for="fieldName"
          class="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-base text-text2 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-text2">
        {{ label }}
      </label>
      <!-- <button v-if="togglePassword" class="absolute right-4 top-3" type="button" @click="showPassword=!showPassword">
        <img v-if="!showPassword" alt="eye" src="@/assets/images/eye.png"/>
        <img v-else alt="eye" src="@/assets/images/eye-slash.png"/>
      </button> -->
    </div>
    <div v-for="(value, key) in error" class="text-warning"><small v-if="shouldCheckInput && !value"
                                                                   :data-i18n="`error_${fieldName}_type_${key}`">{{ _t(`error_${fieldName}_type_${key}`, errorMessages[key] ?? `error_${fieldName}_type_${key}`) }}</small>
    </div>
  </div>
</template>
<script>
import validator from 'validator';

export default {
  props: {
    placeholder: {
      type: String,
      default: " "
    },
    fieldName: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String
    },
    rules: {
      type: String,
    },
    togglePassword: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    errorMessages: {
      type: Object
    },
    inputClass: {
      type: String
    }
  },
  data() {
    return {
      val: this.modelValue,
      shouldCheckInput: false,
      showPassword: false
    }
  },
  watch: {
    val: {
      handler: function (val) {
        this.$emit('update:modelValue', val);
      },
      deep: true,
      immediate: true
    },
    error: {
      handler: function (val) {
        this.$emit('error', {field: this.fieldName, error: Object.values(val).every(v => v === false)});
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    error: function () {
      if (!this.rules) return {};
      let supportRules = {
        email: validator.isEmail(this.val),
        required: this.val.length > 0,
        phone: validator.isMobilePhone(this.val)
      }

      let rules = this.rules.split("|").map(rule => {
        return {
          rule,
          realRule: rule.split(":")[0]
        }
      });

      let specialRuleConditions = {}
      rules.forEach(({realRule, rule}) => {
        let regexMinMax = new RegExp(`(${realRule}):([0-9][0-9]?-[0-9][0-9]?)`, "gm");
        let regexMinMaxResult = regexMinMax.exec(rule);

        if (regexMinMaxResult) {
          let minMax = regexMinMaxResult[2].split("-");
          specialRuleConditions[realRule] = {
            minMax: {min: minMax[0], max: minMax[1]}
          }
        }
      })
      let error = {};

      rules.forEach(({rule, realRule}) => {
        let extraRules = specialRuleConditions[realRule];
        let pleaseExtraRule = true;
        if (extraRules) {
          pleaseExtraRule = Object.keys(extraRules).every(key => {
            switch (key) {
              case "minMax":
                return this.val.length >= extraRules[key]["min"] && this.val.length <= extraRules[key]["max"];
            }
          })
        }

        error[rule] = supportRules[realRule] && pleaseExtraRule
      })

      return error;
    }
  }
}
</script>
