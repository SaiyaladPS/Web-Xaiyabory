import BoxImage from "./BoxImage"
import BoxText from "./BoxText"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ({id}) {
    function componentDidMount() {
        return AOS.init();
      }
    
      componentDidMount();
    
      function componentDidUpdate() {
        return AOS.refresh();
      }
    
      componentDidUpdate();
      const text1 = "ພາຍໃນການຈະມີຈຸດເດັນຄື ການເດີນຂະບວນຂອງຊ້າງປະມານ 45 ຕົວ ແລະ ການສະແດງວັດທະນາທຳຕ່າງໆ 8 ຊົນເຜົ່າ ຮວມທັ້ງນັ້ນມີກາຈັດລຽ້ງບຸບເຟອາຫານຊ້າງ ເຊິ່ງນອກຈາກບຸບເຟທີ່ທາງການກຽມໄວ້ແລ້ວປະຊາຊົນຂອງທາງການຍັງມີການກຽມອາຫານຊ້າງໄວ້ໜ້າບ້ານເພືອຮັບຂະບວນແຫ່ຊ້າງທີ່ເດິນຜ່ານອີກດວ້ຍ ໂດຍຈະມີການຕຽມຕົ້ນກວ້ຍໄວ້ປະມານຄວບຄົວລະ 30 ກິໂລກລາມ"
      const text2 = "ເຖິງອາກາດຈະຮ້ອນແດ່ແຕ່ກະຄຸມທີ່ໄດ້ມາເພາະເຂົາຈັດງານຂື້ນທຸກໆປີແຕ່ເຮົາບໍ່ມີໂອກາດໄດ້ມາກັບເຂົາເລິຍບໍ່ຄອ່ຍມີເວເລຫວ່າງ😥"
      const text3 = "ສຳຫລັບງານຈັດຂື້ນໃນເດືອນກຸມພາພັນຂອງທຸກປີມີ ເຊິງກົງກັບວັນສ້າງຕັ້ງກອງທັບປະຊາຊົນລາວ"
      const text4 = "ເພືອເປັນການອານຸລັກຮັກສາຊ້າງລາວ ເພາະພັນຊ້າງຊຶງເປັນມໍລະດົກຊາດ ແລະ ເພືອເປັນການສືບສານຮັກສາວັດທະນາທຳປະເພນີອັນດີງາມ ແລະ ວິທີການດຳດົງຊິວິດຂອງປະຊາຊົນບັນດາຊົນເຜົ່າຂອງແຂວງໄຊຍະບູລີເຊິ່ງກຽວພັນຜູກພັນກັບຊ້າງມາຕັ້ງແຕ່ອາດີດຕະການໃຫ້ຍຶນຍົງຄົງຄຽງຄູ່ໄປກັບປະຊາຊົນຕະຫຼອດໄປ"
      const text5 = "ສຳຫລັບກິດຈະກຳຫຼັກຂອງການຈັດງານຈະເນັ້ນໜັກທີ່ກ່ຽວຂ້ອງກັບຊ້າງ ແລະ ການອານຸລັກຊ້າງໂດຍ ສະເພາະການສະແດງຂອງຊ້າງແສນຮູ້ພ້ອມກັນນີ້ໃນແຕ່ລະວັນຂອງໄລຍະການຈັດງານໃຫ້ມີກິດຈະກຳຫຼາກຫຼາຍສີສັນດັ່ງນີ້: ການຈັດວາງສະແດງສິນຄ້າພະລິດຕະພັນທາງດ້ານສິນລະປະຫັດທະກຳ ແລະ ອຸສາຫະກຳການປຸງແຕ່ງທີ່ເກີດຂື້ນຈາກຜົນງານຂອງບັນດາ 11 ເມືອງ ສິນຄ້າ 1 ເມືອງ 1 ຜະລິດຕະພັນ ຂອງແຂວງໄຊຍະບູລີໜວ່ຍທຸລະກິດພາກລັດ ເອກະຊົນ ທັງພາຍໃນປະເທດໃກ້ຄຽງ ແລະ ຕົວແທນຂອງຊາວບ້ານເຂົ້າຮ່ວມຈຳນວນ 132 ຮ້ານ ຮ່ວມມູນຄ່າສິນຄ້າປະມານຫຼາຍກວ່າ 4,000 ລ້າຍກັບ"
      const text6 = "ໜຶ່ງໃນການສະແດງທີ່ໜ້າວາດສຽວເບິ່ງເປັນຕາຢ້າແຕ່ກໍຢູ່ໃນຄວາມດູແລອຂອງມຶອາຊິບສະແດງວາງໃຈໄດ້ ແອັດກໍຢາຈະລອງໄປເຮັດຈັກຄັ້ງ 555"
      const text7 = "ແລະນີ້ກໍຄືນໜຶ່ງໃນການສະແດງໃນງານບຸນຊ້າງປະຈຳປີກໍຄື ການປະກວດສາວງາມນາງທິດາຊ້າງເຊິ່ງຈະຈັດຂື້ນໃນຕອນຄ່ຳເຊິ່ງເປັນການແຊ່ງຂັນການລະຫວ່າງນາງງາມຕົວແທ່ນຂອງແຕ່ລະບ້ານທີ່ຢູ່ໃນເມືອງໄຊຍະບູລີ"
      const contar = [
        {id:"1", image:"/image/elephant.jpg", title : "ຈຸດເດັນໃນງານ", text : text1},
        {id:"2", image:"/image/elemo.jpg", title : "ຄອມເມັ້ນຈາກຄົນອືນທີ່ເຄິຍມາ", text : text2},
        {id:"3", image:"/image/borBs.jpg", title : "ເວລາຈັດງານ", text : text3},
        {id:"4", image:"/image/elemo1.jpg", title : "ຈຸດປະສົງໃນການຈັດງານ" , text : text4},
        {id:"5", image:"/image/elemo2.jpg", title : "ກິດຈະກຳຕ່າງໆ", text : text5},
        {id:"6", image:"/image/elemo3.jpg", title : "ການສະແດງບາງສວ່ນ", text: text6},
        {id:"7", image:"/image/elemo4.jpg", title : "ງາມປະກວດນາງທິດາ", text: text7}
      ]
    return(
        <>
        <div className="sideshow">
        <div id={id} className="box-flex">
            <BoxImage aos={"fade-down-right"} delay={"800"}  Class={"box-left"} src={contar[0].image} />
            <BoxText id={contar[0].id} titleto={contar[1].title} aos={"fade-down"} delay={"1000"} Class={"box-reiht"} title={contar[0].title} text={contar[0].text}/>
        </div>
        <div id={contar[0].id} className="box-flex">
            <BoxText id={contar[1].id} titleto={contar[2].title} aos={"fade-down"} delay={"1000"} Class={"box-reiht"} title={contar[1].title} text={contar[1].text}/>
            <BoxImage aos={"fade-down-left"} delay={"800"}  Class={"box-left"} src={contar[1].image} />
        </div>
        <div id={contar[1].id} className="box-flex">
            <BoxImage aos={"fade-down-right"} delay={"800"}  Class={"box-left"} src={contar[2].image} />
            <BoxText id={contar[2].id} titleto={contar[3].title} aos={"fade-down"} delay={"1000"} Class={"box-reiht"} title={contar[2].title} text={contar[2].text}/>
        </div>
        <div id={contar[2].id} className="box-flex">
            <BoxText id={contar[3].id} titleto={contar[4].title} aos={"fade-down"} delay={"1000"} Class={"box-reiht"} title={contar[3].title} text={contar[3].text}/>
            <BoxImage aos={"fade-down-left"} delay={"800"}  Class={"box-left"} src={contar[3].image} />
        </div>
        <div id={contar[3].id} className="box-flex">
            <BoxImage aos={"fade-down-left"} delay={"800"}  Class={"box-left"} src={contar[4].image} />
            <BoxText id={contar[4].id} titleto={contar[3].title} aos={"fade-down"} delay={"1000"} Class={"box-reiht"} title={contar[4].title} text={contar[4].text}/>
        </div>
        <div id={contar[4].id} className="box-flex">
            <BoxText id={contar[6].id} titleto={contar[6].title} aos={"fade-down"} delay={"1000"} Class={"box-reiht"} title={contar[5].title} text={contar[5].text}/>
            <BoxImage aos={"fade-down-left"} delay={"800"}  Class={"box-left"} src={contar[5].image} />
        </div>
        <div id={contar[6].id} className="box-flex">
            <BoxImage aos={"fade-down-left"} delay={"800"}  Class={"box-left"} src={contar[6].image} />
            <BoxText id={"index"} titleto={"ໜ້າລັກ"} aos={"fade-down"} delay={"1000"} Class={"box-reiht"} title={contar[6].title} text={contar[6].text}/>
        </div>
        </div>
        </>
    )
}