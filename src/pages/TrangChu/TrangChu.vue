<template>
    <Slider />
  
    <!-- <SuKienSapDienRa /> -->
  
    <VeChungToi/>
  
    <!-- <TiepTucHoc /> -->
  
    <!-- <DeXuat /> -->
  
    <!-- <KeHoachDaoTao /> -->
  
    <!-- <Hoc /> -->
  
     <!--<KhoaHoc />-->
  
   <!--  <CuocThi />-->
  
    <!-- <KhoHocLieu /> -->
  
    <!-- <MoiThamGia /> -->
  
    <!-- <TinTuc /> -->
  
    <CauNoiNoiTieng />
  
    <!-- <DangKiThamGia /> -->
  
</template>
  
<script>
  
    import Slider from '@/components/TrangChu/Slider.vue'
    import VeChungToi from '@/components/TrangChu/VeChungToi.vue'
    import SuKienSapDienRa from '@/components/TrangChu/SuKienSapDienRa.vue'
    import KeHoachDaoTao from '@/components/TrangChu/KeHoachDaoTao.vue'
    import KhoaHoc from '@/components/TrangChu/KhoaHocNoiBat.vue'
    import TinTuc from '@/components/TrangChu/TinTuc.vue'
    import CauNoiNoiTieng from "@/components/TrangChu/CauNoiNoiTieng.vue";
    import CuocThi from '@/components/TrangChu/CuocThi.vue'
    import MoiThamGia from '@/components/TrangChu/MoiThamGia.vue'
    import KhoHocLieu from '@/components/TrangChu/KhoHocLieu.vue'
  
    import TiepTucHoc from '@/components/TrangChu/TiepTucHoc.vue'
    import Hoc from '@/components/TrangChu/Hoc.vue'
    import DeXuat from '@/components/TrangChu/DeXuatChoBan.vue'
    import DangKiThamGia from '@/components/TrangChu/DangKiThamGia.vue'
  
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
  