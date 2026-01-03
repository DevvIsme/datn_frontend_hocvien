<template>
  <Slider />

  <!-- <SuKienSapDienRa /> -->

  <VeChungToi/>

  <TiepTucHoc />

 <!--  <DeXuat /> -->

  <!-- <KeHoachDaoTao /> -->

  <!-- <Hoc /> -->


   <KhoaHoc />

  <CuocThi />

  <KhoHocLieu />

  <MoiThamGia />

  <!-- <TinTuc /> -->

  <CauNoiNoiTieng />

  <DangKiThamGia />

</template>

<script>

  import Slider from './Slider.vue'
  import VeChungToi from './VeChungToi.vue'
  import SuKienSapDienRa from './SuKienSapDienRa.vue'
  import KeHoachDaoTao from './KeHoachDaoTao.vue'
  import KhoaHoc from './KhoaHocNoiBat.vue'
  import TinTuc from './TinTuc.vue'
  import CauNoiNoiTieng from "./CauNoiNoiTieng.vue";
  import CuocThi from './CuocThi.vue'
  import MoiThamGia from './MoiThamGia.vue'
  import KhoHocLieu from './KhoHocLieu.vue'

  import TiepTucHoc from './TiepTucHoc.vue'
  import Hoc from '././Hoc.vue'
  import DeXuat from './DeXuatChoBan.vue'
  import DangKiThamGia from './DangKiThamGia.vue'

  export default {
    components: {
      Slider,
      VeChungToi,
      SuKienSapDienRa,
      KeHoachDaoTao,
      KhoaHoc,
      TinTuc,
      CauNoiNoiTieng,
      CuocThi,
      MoiThamGia,
      KhoHocLieu,
      TiepTucHoc,
      Hoc,
      DeXuat,
      DangKiThamGia
    }
}

</script>
