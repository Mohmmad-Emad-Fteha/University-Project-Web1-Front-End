/* الاضافات التي يريد الدكتور اضافتها
    1.تغيير محتوى او تنسيق معين عند الضغط على زر
    2.تنفيذ ايفينت مثل سبمت و هوفر و كليك
    3.استخدام loop و شروط اف لعرض بيانات تناسب فكرة مشروعك
    4.اضافة تأثيرات حركية انيميشن باستخدام جي fade , slid كويري مثل  
*/
   /* مهم للمهندس حمزة سألت الاستاذ اسامة انشاصي عن استخدام مكتبة البوتستراب 
     والجيكوري فقال ليس من المهم استخدامهم وانا في مشروعي لم استخدمهم لمراعاة الاستفادة الكاملة من التطبيق
      العملي بايدي ومكتبة جيكويري لم تعمل معي نهائيا وجربت كل الحلول فلم تنجح ,ارجو ان عدم استخدام هذين
      المكتبتين لا يؤثر على التقييم لانه تعبت بالمشروع بجد واجتهاد ولا انسخ قوالب مثل ما فعل بعض الطلاب 
      شكرا جزيلا لكم على مجهوداتكم معنا وعلى اكسابنا الخبرة العملية
      */
/*
بالجزء التفاعلي الأول : هو عمل قائمة تستطيع من خلالها اضافة طلبات للتبرع 
ولا يمكنك اضافة سوى طلب واحد في المرة الواحدة
 وعند الضغط عليها مرة واحدة يظهر جدول الطلب 
 */

var task = document.getElementById('task');
var add = document.getElementById('add');
var list = document.getElementById('list');

var contact_Form =  document.getElementById('contact-form');


add.addEventListener('click',addtask,false);

function addtask()
{
    if(task.value != "")
    {
    var taskAdd = document.createElement("h2");
    taskAdd.appendChild(document.createTextNode(task.value));
  
    taskAdd.addEventListener('click',function()
    {
        taskAdd.style.textDecoration='underline'
        taskAdd.style.color = 'lightgreen';
        contact_Form.style.display ='block'; // يتم عند الضغط على الطلب اظهار جدول تقديم الطلب بعدما قمت باخفاؤه في السي اس اس 
    },false);

    taskAdd.addEventListener('dblclick',function()
    {
        list.removeChild(taskAdd);
        contact_Form.style.display = 'none'; // عند الضغط مرتين على الطلب يتم خذف الطلب واخفاء الجدول
    },false);

    if(list.firstElementChild == null)  //يسمح لك بإضافة طلب واحدة في فقط وعند ازالته  يسمح بإضافة طلب اخرى
    {
        list.appendChild(taskAdd);  
    }
        
    }
}
/*التفاعل الثاني : الذي اريد اضافته في هذا القسم هو عندما يقوم بتعبئة 
بيانات الفورم اخذ بياناته ووضعها في الجدول*/

var save_your_request_button = document.getElementById("save_your_request_button"); //زر حفظ الطلب الذي عنده سيتم اضافة صف في الجدول 

var check_aid_type = document.getElementById("check_aid_type");  // نوع المساعدات المراد التبرع بها
var name_person_aid = document.getElementById("name_person_aid"); // اسم الشخص المتبرع
var person_aid_country = document.getElementById("person_aid_country"); //دولة الشخص المتبرع 
var aid_place = document.getElementById("aid_place"); // المكان الذي ستقدم فيه المساعدات
var aid_amount = document.getElementById('aid_amount'); 

// هنا اريد معرفة كم المبلغ الذي تم التبرع به لمعرفة عدد الاسر التي سيغطيها هذا المبلغ

var number_of_aid_family  = 10 ;     

var history_of_distributed = "30/2/2026"       // تاريخ التوزيع 

var state_of_distributed ="قيد التنفيذ"       // حالة التوزيع

var tfoot_that_add_tr =document.getElementById("tfoot_that_add_tr");       // الحاوية التي سأضيف داخلها جدول

save_your_request_button.addEventListener('click',print_Row_In_Table_Has_PersonData,false);

function print_Row_In_Table_Has_PersonData()
{
    var row_Add = document.createElement("tr") ;

   var td1_Add =  document.createElement("td");
   td1_Add.appendChild(document.createTextNode(check_aid_type.value));

   var td2_Add = document.createElement("td") ;
   td2_Add.appendChild(document.createTextNode(name_person_aid.value)); // عمود اسم الشخص المتبرع

   var td3_Add = document.createElement("td") ;
   td3_Add.appendChild(document.createTextNode(person_aid_country.value)); // عمود دولة الشخص المتبرع

   var td4_Add = document.createElement("td") ;
   td4_Add.appendChild(document.createTextNode(aid_place.value)); //  عمود مكان تقديم المساعدة يجب المراجعة لأنه سليكت 

   var td5_Add = document.createElement("td") ;
   td5_Add.appendChild(document.createTextNode(Math.floor( aid_amount.value/number_of_aid_family )+ "اسرة")); // قمت بتعريف عدد الاسر ووضع معيار 10 وحدات لكل اسرة بحيث المبلغ المتبرع به يقسم على 10 وحدات لكل اسرة فيظهر الناتج وهو عدد الاسر
                                                                        //في الاعلى قمت باستخدام دالة التقريب لادنى منزلة لتجنب الكسور
   var td6_Add = document.createElement("td") ;
   td6_Add.appendChild(document.createTextNode(history_of_distributed));

    var td7_Add = document.createElement("td") ;
   td7_Add.appendChild(document.createTextNode(state_of_distributed));
    td7_Add.className = "pending";

   row_Add.appendChild(td1_Add);
   row_Add.appendChild(td2_Add);
   row_Add.appendChild(td3_Add);
   row_Add.appendChild(td4_Add);
   row_Add.appendChild(td5_Add);
   row_Add.appendChild(td6_Add);
   row_Add.appendChild(td7_Add);

        if(name_person_aid.value != "" && person_aid_country.value != "" && aid_amount.value != 0)
        {
               tfoot_that_add_tr.appendChild(row_Add); 
        }
    
}
 /* ملاحظة للدكتور : لم استطع ربط اضافة صف في الجدول مع زر سبمت لانه يعمل ريفرش ويحدث الصفحة فيحذف الصف*/
