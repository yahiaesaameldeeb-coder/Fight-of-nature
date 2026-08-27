
// ========================
// THE FIGHT OF NATURE v4.0
// By Yahya - معركة الطبيعة
// ========================

const SKIN_TONES = ['#f5d0b5','#e0ac69','#8d5524','#c68642','#ffdbac','#5c3a21','#f0c0a0'];
const HAIR_COLORS = ['#000000','#4a3025','#8b4513','#ffd700','#c0c0c0','#ff69b4','#ffffff','#e74c3c','#3498db'];
const CLOTH_COLORS = ['#ff4444','#4444ff','#44ff44','#ffdd44','#8844ff','#ff44aa','#ffffff','#333333','#e67e22','#2ecc71'];

function mk(name, rank, element, hp, mp, atk, def, spd, skin, hair, cloth, desc, unlocked) {
  return {name, rank, element, hp, maxHp: hp, mp, maxMp: mp, atk, def, spd, skin, hair, cloth, desc, unlocked, lvl: 1, xp: 0, xpToNext: 100};
}

const CHAR_DB = {
  yahya: mk("يحيى","A","نار",100,50,16,8,12,0,3,0,"وريث النار الزرقاء. هادئ لكنه يحترق بالداخل.",true),
  asr: mk("أسر","O","جليد",110,60,14,12,10,0,6,2,"أميرة الصقيع. قوتها تصل للحرارة المطلقة.",true),
  kareem: mk("كريم","C","تحول",90,40,12,10,14,1,0,4,"يستطيع التحول لأي حيوان. صديق مخلص.",true),
  zain: mk("زين","A","رياح",95,45,15,9,16,2,1,7,"رياحه السوداء تحمل الأسرار.",true),
  lama: mk("لمى","B","ماء",100,55,13,11,11,3,8,1,"تحكمها بالماء يُذيب الجبال.",true),
  hawk: mk("هاوك","Os","رياح",120,80,14,10,15,0,9,8,"صقر السماء. يرى من على بعد 500 كم.",false),
  phoenix: mk("فينيق","Os","نار",130,90,16,9,13,0,3,0,"العنقاء. يولد من رماده.",false),
  shark: mk("شارك","Os","ماء",150,70,12,15,8,0,0,3,"وحش الأعماق. الضغط عنده 1000 مرة.",false),
  spider: mk("سبايدر","Os","ظلام",105,85,20,6,14,0,0,5,"نسّاج الظلام. يرى كل شيء.",false),
  lion: mk("ليون","Os","نار",140,100,18,13,11,0,4,6,"ملك الغابة. هيمنته تخضع الكون.",false),
  noor: mk("نور","O","ضوء",115,75,17,8,14,0,9,8,"أخو أسر المفقود. الفجر الأخير.",false),
  rami: mk("رامي","Os","رعد",135,95,15,14,10,1,1,7,"ناظر المدرسة. يعرف كل الأسرار.",false),
  tarek: mk("طارق","A","نار",125,50,14,16,7,2,0,3,"جلده حديد. يحمي الجميع بجسده.",false),
  nora: mk("نورا","B","ظلام",85,60,13,7,18,0,0,5,"لا أحد يراها. تتحدث بلغة الإشارة.",false),
  sami: mk("سامي","C","رياح",110,40,11,14,8,3,1,6,"يتحكم بالأرض. يبني الجدران من التربة.",false),
  hana: mk("هنا","D","ضوء",80,70,6,8,9,0,6,2,"يدها تُحيي. لكنها ضعيفة في القتال.",false),
  omar: mk("عمر","B","رعد",105,55,16,8,13,1,0,0,"برقه يشق الجبال. صوته كالرعد.",false),
  layla: mk("ليلى","A","ظلام",100,65,15,9,12,0,0,5,"تسكن الظلام. تخاف من النور.",false),
  fadi: mk("فادي","C","نار",115,35,13,13,6,2,1,6,"جسده حجارة. بطيء لكنه لا يتكسر.",false),
  rana: mk("رنا","D","تحول",90,50,9,10,10,0,5,2,"الزهور تتفتح حولها. الطبيعة تحبها.",false),
  khaled: mk("خالد","A","نار",120,45,17,12,9,1,0,3,"سيفه من الفولاذ المقدس. لا يصدأ.",false),
  sara: mk("سارة","B","جليد",100,60,14,10,11,0,6,2,"ثلجها لا ينصهر. تنافس أسر سراً.",false),
  amir: mk("أمير","O","ماء",110,55,15,11,12,3,4,6,"الرمال تطيعه. يبني القصور في ثانية.",false),
  dalia: mk("داليا","C","رياح",95,65,12,9,14,0,8,1,"تطير بلا أجنحة. السماء بيتها.",false),
  wael: mk("وائل","D","ظلام",85,45,10,8,13,2,0,5,"يختفي في الدخان. لا أحد يمسكه.",false),
  mona: mk("منى","B","جليد",105,50,13,12,9,0,6,2,"تجمد الوقت لثوانٍ. خطيرة جداً.",false),
  bassam: mk("بسام","A","رعد",100,70,14,8,11,1,1,7,"صوته يحطم الزجاج. يُصم الأذن.",false),
  nadia: mk("نادية","C","ماء",90,55,11,10,12,0,8,1,"تنسخ قدرات الخصم. مرآة حية.",false),
  hisham: mk("هشام","D","نار",95,40,12,9,10,2,0,3,"حباله لا تنقطع. يصطاد الوحوش.",false),
  fatima: mk("فاطمة","B","ضوء",100,80,13,8,13,0,9,8,"تقرأ النجوم. تعرف المستقبل.",false),
  jamal: mk("جمال","A","نار",105,60,18,7,14,1,0,0,"عيناه تطلقان الليزر. لا يمكن إيقافه.",false),
  iman: mk("إيمان","O","ضوء",120,100,12,10,11,0,6,2,"تتحدث مع الأموات. تخاف من الحيين.",false),
  salim: mk("سليم","C","ظلام",95,75,11,9,10,2,1,5,"سحره قديم. يأتي من الشرق.",false),
  ghada: mk("غادة","B","رياح",90,50,17,7,16,0,5,4,"لا تُخطئ. سهامها تتبع الروح.",false),
  anas: mk("أنس","D","تحول",100,40,10,10,11,3,4,6,"يتحدث مع الحيوانات. يفهمها.",false),
  maysa: mk("ميساء","A","ماء",110,55,15,11,10,0,8,1,"كريستالاتها تعكس القدرات.",false),
  tawfiq: mk("توفيق","Os","رعد",130,120,10,12,8,1,0,7,"يتحكم بالزمن. نادر وخطير.",false),
  reem: mk("ريم","C","ضوء",85,70,9,8,12,0,6,2,"تدخل أحلامك. تغيرها.",false),
  adel: mk("عادل","B","نار",110,50,14,13,9,2,1,3,"لا يمكنه الكذب. يعرف الحقيقة.",false),
  sabah: mk("صباح","D","ضوء",95,45,11,9,11,0,3,0,"الضوء يتبعها. تُضيء الظلام.",false),
  murad: mk("مراد","A","نار",125,60,17,10,8,3,4,0,"جسده بركان. يقذف الحمم.",false),
  yasmin: mk("ياسمين","O","تحول",105,80,13,9,14,0,5,2,"زهورها السامة تقتل بصمت.",false),
  feras: mk("فراس","C","نار",100,45,16,8,13,1,0,3,"سيفه جزء منه. لا يفارقه.",false),
  habiba: mk("حبيبة","B","ماء",90,65,10,8,12,0,6,2,"تشعر بقلوب الناس. تعرف من يكذب.",false),
  qusay: mk("قصي","D","نار",105,40,15,9,10,2,1,6,"رمحه يطول حتى يصل السماء.",false),
  warda: mk("وردة","A","تحول",100,55,14,12,10,0,4,2,"شوكها يحميها. يؤلم من يقترب.",false),
  saif: mk("سيف","Os","ظلام",140,110,16,14,12,1,0,7,"الأمير سيف. يمحو الوجود بيد واحدة.",false),
  bushra: mk("بشرى","C","ضوء",95,50,10,10,11,0,8,1,"تأتي ببشرى. الحظ يتبعها.",false),
  maher: mk("ماهر","B","رياح",100,60,13,9,13,2,1,4,"فنونه قتالية. الرقص له سلاح.",false),
  walker_boss: mk("ووكر","Os","ظلام",300,150,25,18,14,0,0,5,"قائد تراينكس. وجه بلا ملامح.",false),
  malek: mk("مالك","A","نار",115,55,17,10,13,1,2,0,"سيد اللهب الأبدي. يحمل ناراً لا تنطفئ أبداً.",false),
  moaz: mk("معاذ","O","رعد",120,65,16,11,15,2,0,3,"صاعقة البرق. يصل بين الأرض والسماء بلمح البصر.",false),
  helmy: mk("حلمي","B","ماء",105,60,13,14,9,3,1,2,"حارس المحيط العميق. يتحكم بالتيارات البحرية.",false),
  ahmed: mk("أحمد","S","ضوء",130,80,18,12,14,0,9,8,"نور الهداية. يُضيء أعمق الظلمات.",false),
  yassin: mk("ياسين","Os","رياح",125,70,15,10,18,1,7,1,"ريح العاصفة. يجوب العالم بسرعة البرق.",false),
  maryam: mk("مريم","SS","نار",150,100,22,15,16,0,3,0,"ملكة اللهب. قوتها تُذيب الجبال وتُحيي الرماد.",false),
  ayman: mk("أيمن","C","ظلام",95,45,12,9,11,0,0,5,"ظلاله تتكلم. لا أحد يعرف حقيقته.",false),
  dalal: mk("دلال","D","تحول",85,55,8,8,13,0,5,2,"تتحول لفراشة. تسرق الأسرار.",false),
  fahd: mk("فهد","A","رياح",110,50,16,9,15,1,1,4,"سريع كالفهد. لا يُدرك.",false),
  ghassan: mk("غسان","B","نار",105,55,14,11,10,2,3,0,"نار الغضب. يحترق كل شيء حوله.",false),
  huda: mk("هدى","C","ضوء",90,65,10,9,12,0,8,1,"تهدي الضالين. نورها ينير الطريق.",false),
  ibrahim: mk("إبراهيم","O","نار",120,60,15,13,11,3,0,3,"باني النار المقدسة. لا يخشى شيئاً.",false),
  joud: mk("جود","D","ماء",80,50,9,8,14,0,6,2,"تبكي دماً. دموعها تشفي الجراح.",false),
  karim2: mk("كريم2","B","رياح",100,50,14,10,12,1,1,7,"نسخة أخرى من كريم. أقوى بمرتين.",false),
  lina: mk("لينا","A","جليد",110,70,15,12,11,0,6,2,"جليدها يحرس القلاع. لا يتزحزح.",false),
  majed: mk("ماجد","Os","نار",135,85,19,14,13,2,4,0,"ملك النار الأحمر. يحكم الصحراء.",false),
  nasser: mk("ناصر","C","رعد",100,45,13,10,12,1,0,0,"برقه يضرب مرتين. لا يعرف الرحمة.",false),
  ola: mk("علا","B","تحول",95,60,12,9,13,0,5,2,"تتحول لذئب. تفترس في الليل.",false),
  qasim: mk("قاسم","D","ظلام",90,40,11,8,10,2,0,5,"يحمل سيف الظلام. يقطع الروح.",false),
  rasha: mk("رشا","A","ماء",105,65,14,11,12,0,8,1,"ماءها يشفي ويقتل. يعتمد على نيتها.",false),
  saleh: mk("صالح","O","ضوء",115,75,16,12,10,1,9,8,"نوره يُطهر. يبعد الشياطين.",false),
  tala: mk("تالا","C","رياح",95,55,12,8,15,0,7,1,"رياحها تلعب. لا تأخذ شيئاً على محمل الجد.",false),
  umar2: mk("عُمر","B","نار",110,50,15,10,11,3,0,3,"نار الشجاعة. لا يعرف الخوف.",false),
  violetta: mk("فيوليتا","A","ظلام",100,70,14,9,14,0,0,5,"بنفسج الظلام. جمالها قاتل.",false),
  wadha: mk("وضحى","D","ضوء",85,50,10,8,12,0,3,0,"فجرها يأتي مبكراً. تُحب الصباح.",false),
  xavier: mk("زافيير","Os","رعد",130,90,17,13,15,1,1,7,"صاعقة السماء. يحكم العواصف.",false),
  yara: mk("يارا","B","ماء",100,60,13,10,12,0,6,2,"أمواجها تغني. تسحر القلوب.",false),
  ziad: mk("زياد","C","نار",105,45,14,9,11,2,3,0,"نار الشباب. يحترق بحماس.",false),
  abeer: mk("عبير","A","تحول",95,65,13,10,14,0,5,2,"عطرها يُسكر. تتحول لغيمة عطر.",false),
  bilal: mk("بلال","O","رياح",115,60,15,11,16,1,1,4,"نداء الرياح. يستدعي العواصف.",false),
  camelia: mk("كامليا","B","جليد",105,65,14,12,10,0,6,2,"وردة الجليد. تتفتح في الصقيع.",false),
  dawoud: mk("داود","D","نار",95,40,12,8,10,3,0,3,"نار الصبر. ينتظر اللحظة المناسبة.",false),
  eman2: mk("إيمان2","C","ضوء",90,60,11,9,12,0,9,8,"نور الإيمان. يُضيء الطريق.",false),
  faris: mk("فارس","A","نار",110,55,17,10,13,1,2,0,"فارس النار. يحمل راية اللهب.",false),
  ghanem: mk("غانم","B","ظلام",100,55,14,10,11,0,0,5,"غانم الظلام. يسرق الضوء.",false),
  hala: mk("حلا","C","ماء",95,60,12,9,13,0,8,1,"موجها هادئ. تُهدئ العواصف.",false),
  issa: mk("عيسى","Os","ضوء",125,85,16,13,14,0,9,8,"نور النبوة. يُحيي الموتى.",false),
  jana: mk("جانا","D","رياح",85,50,9,7,15,0,7,1,"ريح الربيع. تُحيي الزهور.",false),
  khalil: mk("خليل","A","نار",115,55,16,11,12,2,3,0,"خليل النار. صديق الظلام.",false),
  lamar: mk("لمار","B","تحول",100,60,13,10,12,0,5,2,"قمر التحول. تتغير كل ليلة.",false),
  mohanad: mk("مهند","C","رعد",105,50,14,9,12,1,0,0,"مهند البرق. يصنع الأسلحة من الضوء.",false),
  nawal: mk("نوال","A","ماء",110,65,15,11,12,0,8,1,"نوال البحار. تملك كنوز المحيط.",false),
  osama: mk("أسامة","O","نار",120,60,17,12,13,3,4,0,"أسد النار. يهزم الجيوش بمفرده.",false),
  pascal: mk("باسكال","B","جليد",105,60,14,12,10,0,6,2,"جليد الشمال. لا ينصهر أبداً.",false),
  qamar: mk("قمر","D","ضوء",90,55,10,8,12,0,9,8,"قمر النور. يُضيء الليل.",false),
  rafiq: mk("رفيق","C","رياح",100,50,13,10,13,1,1,4,"رفيق الرياح. يسافر مع العواصف.",false),
  sawsan: mk("سوسن","A","تحول",95,65,14,10,14,0,5,2,"سوسن التحول. تتفتح وتذبل وتولد.",false),
  tamer: mk("تامر","Os","ظلام",125,80,18,12,15,0,0,5,"تامر الظلام. يحكم الليل.",false),
  umaima: mk("أميمة","B","ماء",100,60,13,10,12,0,6,2,"أميمة الأمواج. تُهدئ البحار.",false),
  victor: mk("فيكتور","C","نار",105,50,14,9,11,2,3,0,"فيكتور النار. لا يُهزم.",false),
  wijdan: mk("وجدان","D","ضوء",85,50,10,8,13,0,3,0,"وجدان النور. تشعر بكل شيء.",false),
  xena: mk("زينا","A","رياح",110,60,15,10,16,0,7,1,"زينا الرياح. تطير بلا حدود.",false),
  yousef: mk("يوسف","B","نار",105,55,15,11,11,1,2,0,"يوسف النار. يحلم باللهب.",false),
  zahra: mk("زهرة","C","تحول",95,60,12,9,13,0,5,2,"زهرة التحول. تتفتح في كل فصل.",false),
  abdullah: mk("عبدالله","O","ضوء",115,70,16,12,12,0,9,8,"عبدالله النور. يخدم الضوء.",false),
  basma: mk("بسمة","D","ماء",85,55,9,8,14,0,8,1,"بسمة الموج. تُضحك للأمواج.",false),
  charbel: mk("شربل","A","جليد",110,65,15,12,11,0,6,2,"شربل الجليد. يحرس القطب.",false),
  dina: mk("دينا","B","نار",100,55,14,10,12,2,3,0,"دينا النار. تحترق بالشغف.",false),
  elias: mk("إلياس","C","رياح",105,50,13,9,14,1,1,4,"إلياس الرياح. يحمل الأخبار.",false),
  fayez: mk("فايز","Os","نار",130,85,19,14,14,3,4,0,"فايز النار. لا يُقهر.",false),
  gina: mk("جينا","D","ظلام",90,50,11,8,12,0,0,5,"جينا الظلام. تسكن الظلال.",false),
  hisham2: mk("هشام2","B","رعد",110,60,15,10,13,2,0,0,"هشام البرق. يضرب بلا رحمة.",false),
  inas: mk("إيناس","A","ماء",105,65,14,11,13,0,8,1,"إيناس المحيط. تعرف أسرار البحار.",false),
  jasser: mk("جاسر","C","نار",100,50,14,9,12,1,2,0,"جاسر النار. يخترق الدفاعات.",false),
  kenza: mk("كنزة","B","تحول",95,60,13,10,13,0,5,2,"كنزة التحول. تتغير كل يوم.",false),
  latif: mk("لطيف","D","ضوء",90,55,10,9,12,0,3,0,"لطيف النور. يُضيء القلوب.",false),
  mounir: mk("منير","A","نار",115,60,17,11,13,2,3,0,"منير النار. يُضيء الظلام.",false),
  nada: mk("ندى","C","ماء",95,60,12,9,13,0,6,2,"ندى الصباح. تُحيي الزهور.",false),
  othman: mk("عثمان","O","رياح",120,65,16,11,15,1,7,1,"عثمان الرياح. يحكم السماء.",false),
  petra: mk("بترا","B","جليد",105,65,14,12,11,0,6,2,"بترا الجليد. قلعة من ثلج.",false),
  qais: mk("قيس","D","نار",95,45,13,8,11,2,3,0,"قيس النار. يحترق بالحب.",false),
  rita: mk("ريتا","A","تحول",100,65,14,10,14,0,5,2,"ريتا التحول. تتغير كل لحظة.",false),
  samer: mk("سامر","C","ظلام",100,55,13,9,12,0,0,5,"سامر الظلام. يحرس الأسرار.",false),
  thuraya: mk("ثريا","B","ضوء",105,70,14,11,13,0,9,8,"ثريا النجوم. تُضيء السماء.",false),
};

let heroCount = 0;
for (const k in CHAR_DB) heroCount++;
console.log('Total heroes:', heroCount);

const ITEMS = [
  {id:'potion_hp',name:'جرعة صحة',icon:'❤️',effect:'heal',val:30,desc:'تستعيد 30 نقطة صحة'},
  {id:'potion_mp',name:'جرعة طاقة',icon:'💙',effect:'mp',val:20,desc:'تستعيد 20 نقطة طاقة'},
  {id:'potion_big',name:'جرعة كبرى',icon:'💖',effect:'heal',val:80,desc:'تستعيد 80 نقطة صحة'},
  {id:'sword_iron',name:'سيف حديد',icon:'⚔️',effect:'atk',val:5,desc:'+5 هجوم'},
  {id:'shield_wood',name:'درع خشبي',icon:'🛡️',effect:'def',val:3,desc:'+3 دفاع'},
  {id:'ring_speed',name:'خاتم السرعة',icon:'💍',effect:'spd',val:4,desc:'+4 سرعة'},
  {id:'amulet_fire',name:'تعويذة النار',icon:'🔥',effect:'atk',val:8,desc:'+8 هجوم ناري'},
  {id:'crystal_ice',name:'بلورة الجليد',icon:'❄️',effect:'def',val:6,desc:'+6 دفاع جليدي'},
  {id:'scroll_wind',name:'مخطوطة الرياح',icon:'📜',effect:'spd',val:6,desc:'+6 سرعة رياح'},
  {id:'orb_light',name:'كرة الضوء',icon:'✨',effect:'mp',val:50,desc:'تستعيد 50 طاقة'},
  {id:'dagger_shadow',name:'خنجر الظل',icon:'🗡️',effect:'atk',val:10,desc:'+10 هجوم'},
  {id:'armor_dragon',name:'درع التنين',icon:'🐉',effect:'def',val:10,desc:'+10 دفاع'},
  {id:'boots_wind',name:'حذاء الرياح',icon:'👟',effect:'spd',val:8,desc:'+8 سرعة'},
  {id:'crown_king',name:'تاج الملك',icon:'👑',effect:'all',val:5,desc:'+5 كل الإحصائيات'},
  {id:'potion_revive',name:'جرعة الإحياء',icon:'🌟',effect:'revive',val:50,desc:'يُحيى بنصف الصحة'},
];

let player = null;
let settings = {quality:'high',speed:1,music:'on'};
let inventory = [];
let gameState = 'menu';
let keys = {};
let selectedHair = 3, selectedCloth = 0, selectedSkin = 0;
let currentStoryIndex = 0;
let tournamentData = null;
let battleData = null;

function $(id) { return document.getElementById(id); }
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  if (id) $(id).classList.add('active');
}
function showNotif(text) {
  const n = $('notif'); n.textContent = text; n.classList.add('show');
  setTimeout(() => n.classList.remove('show'), 2500);
}
function rand(min, max) { return Math.random() * (max - min) + min; }
function randInt(min, max) { return Math.floor(rand(min, max)); }
function lerp(a, b, t) { return a + (b - a) * t; }

// ========================
// AUDIO ENGINE
// ========================
const AudioEngine = {
  ctx: null,
  bgmOsc: null,
  init() {
    try { this.ctx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e) {}
  },
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); },
  playMusic() {
    if (!this.ctx || settings.music === 'off') return;
    this.stopMusic();
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(130, this.ctx.currentTime);
    g.gain.setValueAtTime(0.015, this.ctx.currentTime);
    o.connect(g); g.connect(this.ctx.destination); o.start();
    this.bgmOsc = o;
  },
  stopMusic() { if (this.bgmOsc) { this.bgmOsc.stop(); this.bgmOsc = null; } },
  sfxAttack() { this._tone(440, 'square', 0.1, 0.1); },
  sfxHit() { this._tone(200, 'sawtooth', 0.12, 0.1); },
  sfxHeal() { this._tone(550, 'sine', 0.2, 0.1); },
  sfxWin() { this._tone(700, 'sine', 0.3, 0.15); },
  sfxLevelUp() { this._tone(900, 'sine', 0.4, 0.15); },
  sfxError() { this._tone(100, 'sawtooth', 0.3, 0.1); },
  _tone(f, t, d, v) {
    if (!this.ctx || settings.music === 'off') return;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = t; o.frequency.setValueAtTime(f, this.ctx.currentTime);
    g.gain.setValueAtTime(v, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + d);
    o.connect(g); g.connect(this.ctx.destination);
    o.start(); o.stop(this.ctx.currentTime + d);
  }
};

// ========================
// REALISTIC 2D CHARACTER DRAWER
// ========================
function drawChar2D(ctx, w, h, char, scale) {
  scale = scale || 1;
  ctx.clearRect(0, 0, w, h);
  const skin = SKIN_TONES[char.skin] || SKIN_TONES[0];
  const hair = HAIR_COLORS[char.hair] || HAIR_COLORS[0];
  const cloth = CLOTH_COLORS[char.cloth] || CLOTH_COLORS[0];
  const cx = w/2, cy = h/2 + 20;
  const s = scale;

  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.beginPath();
  ctx.ellipse(cx, cy + 75*s, 30*s, 8*s, 0, 0, Math.PI*2);
  ctx.fill();

  // Legs (pants)
  ctx.fillStyle = '#2a2a3a';
  ctx.fillRect(cx - 18*s, cy + 35*s, 14*s, 40*s);
  ctx.fillRect(cx + 4*s, cy + 35*s, 14*s, 40*s);

  // Boots
  ctx.fillStyle = '#1a1a2a';
  ctx.fillRect(cx - 20*s, cy + 68*s, 18*s, 10*s);
  ctx.fillRect(cx + 2*s, cy + 68*s, 18*s, 10*s);

  // Body (torso with cloth)
  ctx.fillStyle = cloth;
  ctx.beginPath();
  ctx.moveTo(cx - 25*s, cy - 10*s);
  ctx.lineTo(cx + 25*s, cy - 10*s);
  ctx.lineTo(cx + 22*s, cy + 40*s);
  ctx.lineTo(cx - 22*s, cy + 40*s);
  ctx.closePath();
  ctx.fill();

  // Belt
  ctx.fillStyle = '#3a2a1a';
  ctx.fillRect(cx - 23*s, cy + 32*s, 46*s, 6*s);
  ctx.fillStyle = '#ffd700';
  ctx.fillRect(cx - 4*s, cy + 31*s, 8*s, 8*s);

  // Arms
  ctx.fillStyle = skin;
  ctx.beginPath();
  ctx.roundRect(cx - 38*s, cy - 5*s, 12*s, 38*s, 6*s);
  ctx.fill();
  ctx.beginPath();
  ctx.roundRect(cx + 26*s, cy - 5*s, 12*s, 38*s, 6*s);
  ctx.fill();

  // Sleeves
  ctx.fillStyle = cloth;
  ctx.fillRect(cx - 39*s, cy - 6*s, 14*s, 18*s);
  ctx.fillRect(cx + 25*s, cy - 6*s, 14*s, 18*s);

  // Hands
  ctx.fillStyle = skin;
  ctx.beginPath();
  ctx.arc(cx - 32*s, cy + 36*s, 6*s, 0, Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + 32*s, cy + 36*s, 6*s, 0, Math.PI*2);
  ctx.fill();

  // Head (face)
  ctx.fillStyle = skin;
  ctx.beginPath();
  ctx.ellipse(cx, cy - 35*s, 22*s, 26*s, 0, 0, Math.PI*2);
  ctx.fill();

  // Hair - detailed
  ctx.fillStyle = hair;
  ctx.beginPath();
  ctx.arc(cx, cy - 42*s, 24*s, Math.PI, 0);
  ctx.fill();
  // Hair sides
  ctx.beginPath();
  ctx.moveTo(cx - 24*s, cy - 35*s);
  ctx.quadraticCurveTo(cx - 28*s, cy - 15*s, cx - 18*s, cy - 20*s);
  ctx.lineTo(cx - 10*s, cy - 25*s);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx + 24*s, cy - 35*s);
  ctx.quadraticCurveTo(cx + 28*s, cy - 15*s, cx + 18*s, cy - 20*s);
  ctx.lineTo(cx + 10*s, cy - 25*s);
  ctx.fill();
  // Hair top detail
  ctx.beginPath();
  ctx.moveTo(cx - 20*s, cy - 55*s);
  ctx.quadraticCurveTo(cx, cy - 65*s, cx + 20*s, cy - 55*s);
  ctx.quadraticCurveTo(cx, cy - 58*s, cx - 20*s, cy - 55*s);
  ctx.fill();

  // Eyes
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.ellipse(cx - 8*s, cy - 38*s, 3.5*s, 4*s, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(cx + 8*s, cy - 38*s, 3.5*s, 4*s, 0, 0, Math.PI*2);
  ctx.fill();
  // Eye shine
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(cx - 7*s, cy - 40*s, 1.2*s, 0, Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + 9*s, cy - 40*s, 1.2*s, 0, Math.PI*2);
  ctx.fill();

  // Eyebrows
  ctx.strokeStyle = hair;
  ctx.lineWidth = 2*s;
  ctx.beginPath();
  ctx.moveTo(cx - 14*s, cy - 44*s);
  ctx.lineTo(cx - 4*s, cy - 46*s);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + 4*s, cy - 46*s);
  ctx.lineTo(cx + 14*s, cy - 44*s);
  ctx.stroke();

  // Nose
  ctx.fillStyle = 'rgba(0,0,0,0.15)';
  ctx.beginPath();
  ctx.moveTo(cx, cy - 33*s);
  ctx.lineTo(cx - 3*s, cy - 28*s);
  ctx.lineTo(cx + 3*s, cy - 28*s);
  ctx.closePath();
  ctx.fill();

  // Mouth
  ctx.strokeStyle = 'rgba(0,0,0,0.3)';
  ctx.lineWidth = 1.5*s;
  ctx.beginPath();
  ctx.arc(cx, cy - 24*s, 6*s, 0.1, Math.PI - 0.1);
  ctx.stroke();

  // Element aura
  const elemColors = {'نار':'#ff4444','جليد':'#44aaff','رياح':'#44ff44','ماء':'#4444ff','ضوء':'#ffdd44','ظلام':'#8844ff','رعد':'#ffaa00','تحول':'#ff44aa'};
  const ec = elemColors[char.element] || '#fff';
  ctx.shadowColor = ec;
  ctx.shadowBlur = 20*s;
  ctx.strokeStyle = ec;
  ctx.lineWidth = 2*s;
  ctx.beginPath();
  ctx.arc(cx, cy - 35*s, 30*s, 0, Math.PI*2);
  ctx.stroke();
  ctx.shadowBlur = 0;
}

// ========================
// GAME SYSTEM
// ========================
const GAME = {
  init() {
    AudioEngine.init();
    this.setupInputs();
    this.setupColorPickers();
    this.loadSettings();
    setTimeout(() => {
      const intro = $('intro-overlay');
      if (intro) {
        intro.classList.add('active');
        setTimeout(() => {
          intro.classList.add('fade-out');
          setTimeout(() => { intro.style.display = 'none'; }, 1500);
        }, 3000);
      }
      try { AudioEngine.resume(); AudioEngine.playMusic(); } catch(e) {}
    }, 200);
  },
  setupInputs() {
    document.addEventListener('keydown', e => {
      keys[e.key] = true;
      if (e.key === 'Escape') this.toggleMenu();
      if (e.key === 'e' || e.key === 'E') this.interact();
    });
    document.addEventListener('keyup', e => { keys[e.key] = false; });
    document.querySelectorAll('.mobile-btn').forEach(btn => {
      const k = btn.dataset.key;
      const start = () => { keys[k] = true; btn.classList.add('pressed'); };
      const end = () => { keys[k] = false; btn.classList.remove('pressed'); };
      btn.addEventListener('touchstart', e => { e.preventDefault(); start(); });
      btn.addEventListener('touchend', e => { e.preventDefault(); end(); });
      btn.addEventListener('mousedown', start);
      btn.addEventListener('mouseup', end);
      btn.addEventListener('mouseleave', end);
    });
  },
  setupColorPickers() {
    const make = (id, colors, sel, onChange) => {
      const el = $(id);
      colors.forEach((c, i) => {
        const div = document.createElement('div');
        div.className = 'color-option' + (i === sel ? ' selected' : '');
        div.style.backgroundColor = c;
        div.onclick = () => {
          el.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
          div.classList.add('selected');
          onChange(i);
          this.updatePreview();
        };
        el.appendChild(div);
      });
    };
    make('hair-colors', HAIR_COLORS, selectedHair, i => selectedHair = i);
    make('cloth-colors', CLOTH_COLORS, selectedCloth, i => selectedCloth = i);
    make('skin-colors', SKIN_TONES, selectedSkin, i => selectedSkin = i);
    $('char-element').addEventListener('change', () => this.updatePreview());
    this.updatePreview();
  },
  updatePreview() {
    const canvas = $('preview-canvas');
    const ctx = canvas.getContext('2d');
    const elem = $('char-element').value;
    const previewChar = {name: $('char-name').value, element: elem, skin: selectedSkin, hair: selectedHair, cloth: selectedCloth, rank: 'A'};
    drawChar2D(ctx, 140, 180, previewChar, 1.2);
  },
  createCharacter() {
    const name = $('char-name').value.trim() || 'يحيى';
    const elem = $('char-element').value;
    player = {name, rank: 'A', element: elem, hp: 100, maxHp: 100, mp: 50, maxMp: 50, atk: 16, def: 8, spd: 12, skin: selectedSkin, hair: selectedHair, cloth: selectedCloth, desc: 'بطل جديد يصعد.', unlocked: true, lvl: 1, xp: 0, xpToNext: 100};
    inventory = [{...ITEMS[0], qty: 3}, {...ITEMS[1], qty: 2}];
    this.toMenu();
    showNotif('مرحباً ' + name + '!');
    AudioEngine.sfxWin();
  },
  toMenu() { gameState = 'menu'; showScreen('scr-title'); $('hud').style.display = 'none'; },
  toCreator() { showScreen('scr-creator'); this.updatePreview(); },
  toStoryMode() { STORY.load(0); showScreen('scr-story'); },
  toBattleMode() { BATTLE.start(); showScreen('scr-battle'); },
  toTournamentMode() { TOURNAMENT.showBracket(); showScreen('scr-tournament'); },
  toCharacterList() { this.renderCharList(); showScreen('scr-charlist'); },
  toInventory() { this.renderInventory(); showScreen('scr-inventory'); },
  toSettings() { showScreen('scr-settings'); },
  toCredits() { showScreen('scr-credits'); },
  toggleMenu() {
    if (gameState === 'battle') return;
    const pause = $('scr-pause');
    if (pause.classList.contains('active')) {
      pause.classList.remove('active');
      gameState = 'world';
    } else {
      pause.classList.add('active');
      gameState = 'paused';
    }
  },
  resume() { $('scr-pause').classList.remove('active'); gameState = 'world'; },
  interact() { showNotif('لا يوجد أحد هنا للتحدث!'); },
  toggleMap() { showNotif('الخريطة غير متوفرة في هذا الوضع'); },
  saveGame() {
    if (!player) { showNotif('لا يوجد بطل لحفظه!'); return; }
    const data = {player, inventory, settings};
    localStorage.setItem('nature_save', JSON.stringify(data));
    showNotif('تم الحفظ! 💾');
    AudioEngine.sfxWin();
  },
  loadGame() {
    const data = localStorage.getItem('nature_save');
    if (!data) { showNotif('لا يوجد حفظ سابق!'); return; }
    try {
      const parsed = JSON.parse(data);
      player = parsed.player;
      inventory = parsed.inventory || [];
      settings = parsed.settings || settings;
      showNotif('تم التحميل! 📂');
      AudioEngine.sfxWin();
    } catch(e) { showNotif('خطأ في التحميل!'); }
  },
  loadSettings() {
    const s = localStorage.getItem('nature_settings');
    if (s) { try { settings = JSON.parse(s); } catch(e) {} }
  },
  applySettings() {
    settings.quality = $('set-quality').value;
    settings.speed = parseFloat($('set-speed').value);
    settings.music = $('set-music').value;
    localStorage.setItem('nature_settings', JSON.stringify(settings));
    showNotif('تم تطبيق الإعدادات!');
  },
  renderCharList() {
    const list = $('char-list');
    list.innerHTML = '';
    for (const key in CHAR_DB) {
      const c = CHAR_DB[key];
      const card = document.createElement('div');
      card.className = 'char-card' + (c.unlocked ? '' : ' locked');
      const elemColors = {'نار':'#ff4444','جليد':'#44aaff','رياح':'#44ff44','ماء':'#4444ff','ضوء':'#ffdd44','ظلام':'#8844ff','رعد':'#ffaa00','تحول':'#ff44aa'};
      card.innerHTML = '<div class="char-icon" style="background:' + (elemColors[c.element] || '#666') + '">' + (c.unlocked ? '⚔️' : '🔒') + '</div><div><div class="char-name">' + c.name + '</div><div class="char-meta">' + c.rank + ' | ' + c.element + ' | HP:' + c.hp + '</div></div>';
      if (c.unlocked) {
        card.onclick = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 200; canvas.height = 250;
          drawChar2D(canvas.getContext('2d'), 200, 250, c, 1.4);
          const dlg = $('dialogue');
          $('dlg-name').textContent = c.name;
          $('dlg-text').innerHTML = '<div style="display:flex;gap:16px;align-items:center;"><img src="' + canvas.toDataURL() + '" style="width:100px;height:125px;border-radius:8px;"><div>' + c.desc + '<br><br>⚔️ ' + c.atk + ' | 🛡️ ' + c.def + ' | ⚡ ' + c.spd + '<br>❤️ ' + c.hp + ' | 💙 ' + c.mp + '</div></div>';
          dlg.classList.add('active');
          setTimeout(() => dlg.classList.remove('active'), 4000);
        };
      }
      list.appendChild(card);
    }
  },
  renderInventory() {
    const grid = $('inv-grid');
    grid.innerHTML = '';
    inventory.forEach(item => {
      const slot = document.createElement('div');
      slot.className = 'inv-slot';
      slot.innerHTML = '<div class="item-icon">' + item.icon + '</div><div>' + item.name + '</div><div style="color:var(--dim);font-size:10px;">x' + item.qty + '</div>';
      slot.onclick = () => this.useItem(item);
      grid.appendChild(slot);
    });
  },
  useItem(item) {
    if (!player) return;
    if (item.effect === 'heal') { player.hp = Math.min(player.maxHp, player.hp + item.val); showNotif('+' + item.val + ' صحة!'); }
    else if (item.effect === 'mp') { player.mp = Math.min(player.maxMp, player.mp + item.val); showNotif('+' + item.val + ' طاقة!'); }
    else if (item.effect === 'atk') { player.atk += item.val; showNotif('+' + item.val + ' هجوم!'); }
    else if (item.effect === 'def') { player.def += item.val; showNotif('+' + item.val + ' دفاع!'); }
    else if (item.effect === 'spd') { player.spd += item.val; showNotif('+' + item.val + ' سرعة!'); }
    else if (item.effect === 'all') { player.atk += item.val; player.def += item.val; player.spd += item.val; showNotif('+' + item.val + ' كل الإحصائيات!'); }
    else if (item.effect === 'revive') { player.hp = Math.floor(player.maxHp * item.val / 100); showNotif('أُحييت!'); }
    item.qty--;
    if (item.qty <= 0) inventory = inventory.filter(i => i !== item);
    this.renderInventory();
    AudioEngine.sfxHeal();
  }
};

// ========================
// BATTLE SYSTEM
// ========================
const BATTLE = {
  start() {
    if (!player) { showNotif('أنشئ بطلاً أولاً!'); GAME.toMenu(); return; }
    const keys = Object.keys(CHAR_DB).filter(k => k !== 'walker_boss');
    const enemyKey = keys[randInt(0, keys.length)];
    const enemy = {...CHAR_DB[enemyKey]};
    enemy.maxHp = enemy.hp; enemy.maxMp = enemy.mp;
    battleData = {player: {...player}, enemy: enemy, turn: 0, log: [], defending: false};
    battleData.player.maxHp = player.maxHp; battleData.player.maxMp = player.maxMp;
    this.updateUI();
    gameState = 'battle';
    $('hud').style.display = 'block';
    this.log('بدأ القتال! ' + player.name + ' ضد ' + enemy.name);
    AudioEngine.sfxAttack();
  },
  attack() {
    if (!battleData) return;
    const bd = battleData;
    const dmg = Math.max(1, bd.player.atk - Math.floor(bd.enemy.def * 0.5) + randInt(-3, 4));
    bd.enemy.hp -= dmg;
    this.log(bd.player.name + ' يهاجم ' + bd.enemy.name + ' بـ ' + dmg + ' ضرر!');
    AudioEngine.sfxAttack();
    this.shake('battle-e-canvas');
    if (bd.enemy.hp <= 0) { this.win(); return; }
    setTimeout(() => this.enemyTurn(), 800);
  },
  special() {
    if (!battleData) return;
    const bd = battleData;
    if (bd.player.mp < 15) { this.log('لا توجد طاقة كافية!'); AudioEngine.sfxError(); return; }
    bd.player.mp -= 15;
    const dmg = Math.floor(bd.player.atk * 1.8) + randInt(5, 15);
    bd.enemy.hp -= dmg;
    this.log(bd.player.name + ' يستخدم قدرة ' + bd.player.element + '! ' + dmg + ' ضرر!');
    AudioEngine.sfxAttack();
    this.shake('battle-e-canvas');
    if (bd.enemy.hp <= 0) { this.win(); return; }
    setTimeout(() => this.enemyTurn(), 800);
  },
  defend() {
    if (!battleData) return;
    const bd = battleData;
    bd.defending = true;
    this.log(bd.player.name + ' يتخذ وضع الدفاع!');
    AudioEngine.sfxHeal();
    setTimeout(() => this.enemyTurn(), 600);
  },
  heal() {
    if (!battleData) return;
    const bd = battleData;
    if (bd.player.mp < 10) { this.log('لا توجد طاقة كافية!'); AudioEngine.sfxError(); return; }
    bd.player.mp -= 10;
    const heal = 25 + randInt(5, 15);
    bd.player.hp = Math.min(bd.player.maxHp, bd.player.hp + heal);
    this.log(bd.player.name + ' يشفي نفسه بـ ' + heal + '!');
    AudioEngine.sfxHeal();
    setTimeout(() => this.enemyTurn(), 800);
  },
  enemyTurn() {
    const bd = battleData;
    if (!bd || bd.enemy.hp <= 0) return;
    bd.turn++;
    bd.enemy.mp = Math.min(bd.enemy.maxMp, bd.enemy.mp + 5);
    let dmg = Math.max(1, bd.enemy.atk - Math.floor(bd.player.def * 0.5) + randInt(-3, 4));
    if (bd.defending) { dmg = Math.floor(dmg * 0.4); bd.defending = false; }
    bd.player.hp -= dmg;
    this.log(bd.enemy.name + ' يهاجم! ' + dmg + ' ضرر!');
    AudioEngine.sfxHit();
    this.shake('battle-p-canvas');
    if (bd.player.hp <= 0) { this.lose(); return; }
    this.updateUI();
  },
  win() {
    const bd = battleData;
    this.log('🎉 ' + bd.player.name + ' انتصر!');
    AudioEngine.sfxWin();
    const xpGain = 20 + bd.enemy.rank.length * 10;
    player.xp += xpGain;
    showNotif('+' + xpGain + ' خبرة!');
    if (player.xp >= player.xpToNext) {
      player.lvl++;
      player.xp -= player.xpToNext;
      player.xpToNext = Math.floor(player.xpToNext * 1.5);
      player.maxHp += 10; player.hp = player.maxHp;
      player.maxMp += 5; player.mp = player.maxMp;
      player.atk += 2; player.def += 1; player.spd += 1;
      showNotif('مستوى جديد! ' + player.lvl);
      AudioEngine.sfxLevelUp();
    }
    if (bd.tournament) {
      setTimeout(() => TOURNAMENT.winMatch(), 1200);
      return;
    }
    if (bd.storyNext !== undefined && bd.storyNext !== null) {
      setTimeout(() => {
        battleData = null;
        $('hud').style.display = 'none';
        gameState = 'story';
        STORY.load(bd.storyNext);
        showScreen('scr-story');
      }, 1200);
      return;
    }
    setTimeout(() => { gameState = 'menu'; showScreen('scr-title'); $('hud').style.display = 'none'; }, 3000);
  },
  lose() {
    const bd = battleData;
    this.log('💀 ' + bd.player.name + ' هُزم...');
    AudioEngine.sfxHit();
    if (bd.tournament) {
      setTimeout(() => TOURNAMENT.loseMatch(), 1200);
      return;
    }
    if (bd.storyLose !== undefined && bd.storyLose !== null) {
      setTimeout(() => {
        battleData = null;
        $('hud').style.display = 'none';
        gameState = 'story';
        STORY.load(bd.storyLose);
        showScreen('scr-story');
      }, 1200);
      return;
    }
    setTimeout(() => { gameState = 'menu'; showScreen('scr-title'); $('hud').style.display = 'none'; }, 3000);
  },
  updateUI() {
    if (!battleData) return;
    const bd = battleData;
    $('battle-p-name').textContent = bd.player.name;
    $('battle-e-name').textContent = bd.enemy.name;
    $('battle-p-hp').style.width = Math.max(0, bd.player.hp / bd.player.maxHp * 100) + '%';
    $('battle-e-hp').style.width = Math.max(0, bd.enemy.hp / bd.enemy.maxHp * 100) + '%';
    $('battle-p-stats').textContent = 'HP: ' + Math.max(0, bd.player.hp) + '/' + bd.player.maxHp + ' | MP: ' + bd.player.mp;
    $('battle-e-stats').textContent = 'HP: ' + Math.max(0, bd.enemy.hp) + '/' + bd.enemy.maxHp;
    // Draw characters
    const pCanvas = $('battle-p-canvas');
    drawChar2D(pCanvas.getContext('2d'), 160, 200, bd.player, 1.1);
    const eCanvas = $('battle-e-canvas');
    drawChar2D(eCanvas.getContext('2d'), 160, 200, bd.enemy, 1.1);
  },
  log(msg) {
    const log = $('battle-log');
    const div = document.createElement('div');
    div.textContent = '> ' + msg;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
    this.updateUI();
  },
  shake(id) {
    const el = $(id);
    el.style.transform = 'translateX(5px)';
    setTimeout(() => el.style.transform = 'translateX(-5px)', 50);
    setTimeout(() => el.style.transform = 'translateX(3px)', 100);
    setTimeout(() => el.style.transform = 'translateX(0)', 150);
  }
};

// ========================
// STORY SYSTEM (with battles!)
// ========================
const STORY = {
  chapters: [
    {chap: 'الفصل 1', title: 'الاستيقاظ', text: 'تستيقظ في غابة مظلمة. لا تتذكر كيف وصلت هنا. تسمع أصواتاً غريبة من بين الأشجار...', choices: [{text: 'استكشف الغابة', next: 1}, {text: 'ابقَ مكانك', next: 2}]},
    {chap: 'الفصل 1', title: 'الغابة', text: 'تتقدم بحذر بين الأشجار. فجأة، يقفز أمامك ذئب ضخم! أسنانه تلمع في الظلام.', battle: {enemy: 'wolf', name: 'ذئب الغابة', hp: 60, atk: 12, def: 5, element: 'ظلام'}, nextWin: 3, nextLose: 4},
    {chap: 'الفصل 1', title: 'الانتظار', text: 'تقرر البقاء مكانك. بعد دقائق، يظهر رجل غامض يرتدي رداء أسود. "من أنت؟" يسأل.', choices: [{text: 'أنا بريء', next: 5}, {text: 'لا شأن لك', next: 6}]},
    {chap: 'الفصل 2', title: 'النصر', text: 'تهزم الذئب ببسالة! يسقط على الأرض ويتحول لدخان أسود. تجد خاتماً يتألق على رقبته.', choices: [{text: 'خذ الخاتم', next: 7}, {text: 'اتركه', next: 8}]},
    {chap: 'الفصل 1', title: 'الهزيمة', text: 'الذئب أقوى مما توقعت! يسقطك أرضاً... تستيقظ لاحقاً وقد فقدت كل ما معك.', choices: [{text: 'حاول مجدداً', next: 0}, {text: 'استسلم', next: 9}]},
    {chap: 'الفصل 2', title: 'الصديق', text: 'الرجل يبتسم. "أنا يحيى. سأساعدك في هذه الرحلة." يعطيك سيفاً متألقاً.', choices: [{text: 'شكراً', next: 10}, {text: 'لا أحتاج مساعدة', next: 11}]},
    {chap: 'الفصل 2', title: 'العدو', text: 'يحيى يغضب! "إذن أنت عدو!" يسحب سيفه ويهاجمك!', battle: {enemy: 'yahya', name: 'يحيى الغاضب', hp: 120, atk: 18, def: 10, element: 'نار'}, nextWin: 12, nextLose: 4},
    {chap: 'الفصل 3', title: 'الخاتم', text: 'تلبس الخاتم. تشعر بقوة هائلة تتدفق في جسدك! هل هذا شعور العنصر؟', choices: [{text: 'اختبر قوتك', next: 13}, {text: 'استمر بحذر', next: 14}]},
    {chap: 'الفصل 3', title: 'الحذر', text: 'تقرر عدم لمس الخاتم. تستمر في المشي... فجأة، تسمع صراخاً من بعيد!', choices: [{text: 'اذهب للمساعدة', next: 15}, {text: 'تجاهل', next: 16}]},
    {chap: 'النهاية', title: 'الاستسلام', text: 'تستسلم للظلام. لن تُعرف أبداً كبطل... لكن على الأقل، أنت حيّ.', choices: [{text: 'العب مجدداً', next: 0}]},
    {chap: 'الفصل 3', title: 'التحالف', text: 'يحيى يرافقك في رحلتك. معاً، تواجهان وحشاً هائلاً يحمي بوابة القلعة!', battle: {enemy: 'guardian', name: 'حارس البوابة', hp: 200, atk: 20, def: 15, element: 'رعد'}, nextWin: 17, nextLose: 4},
    {chap: 'الفصل 3', title: 'وحيداً', text: 'تسير وحيداً. القوة وحدها لن تكفي... يهاجمك ساحر الظلام!', battle: {enemy: 'darkmage', name: 'ساحر الظلام', hp: 150, atk: 25, def: 8, element: 'ظلام'}, nextWin: 18, nextLose: 4},
    {chap: 'الفصل 4', title: 'السلام', text: 'يهزم يحيى ويعتذر. "كنت أختبرك." ينضم إليك رسمياً. القوة تتضاعف!', choices: [{text: 'استمر', next: 10}]},
    {chap: 'الفصل 4', title: 'القوة', text: 'تختبر قوتك على صخرة ضخمة. تنفجر! القوة تفوق توقعاتك.', choices: [{text: 'استمر', next: 19}]},
    {chap: 'الفصل 4', title: 'المساعدة', text: 'تجد فتاة محاصرة. تنقذها. "شكراً! أنا لمى." تنضم إليك!', choices: [{text: 'استمر', next: 20}]},
    {chap: 'الفصل 5', title: 'البوابة', text: 'تهزمان حارس البوابة! تدخل القلعة. هناك، ينتظرك ووكر... القائد المظلم.', battle: {enemy: 'walker', name: 'ووكر', hp: 300, atk: 25, def: 18, element: 'ظلام'}, nextWin: 21, nextLose: 4},
    {chap: 'الفصل 5', title: 'النور', text: 'تهزم ساحر الظلام! ينتشر النور في الغابة. الطبيعة تُحيى من جديد!', choices: [{text: 'استمر', next: 22}]},
    {chap: 'الفصل 5', title: 'التحدي', text: 'تواجه تحدياً صعباً. جسر فوق وادٍ عميق. هل تستطيع العبور؟', choices: [{text: 'اقفز', next: 23}, {text: 'ابحث عن طريق آخر', next: 24}]},
    {chap: 'النهاية', title: 'النصر!', text: 'تهزم ووكر! يسقط القائد المظلم. تعود النور والحياة للطبيعة. أنت البطل الحقيقي!', choices: [{text: 'العب مجدداً', next: 0}]},
    {chap: 'النهاية', title: 'النور الأبدي', text: 'تُضيء النجوم سماءك. أصبحت أسطورة. قصتك ستُروى للأجيال القادمة.', choices: [{text: 'العب مجدداً', next: 0}]},
    {chap: 'الفصل 5', title: 'الجسر', text: 'تقفز بنجاح! على الجانب الآخر، ينتظرك كنز... وعدو.', battle: {enemy: 'treasure_guard', name: 'حارس الكنز', hp: 180, atk: 22, def: 12, element: 'نار'}, nextWin: 25, nextLose: 4},
    {chap: 'الفصل 5', title: 'الطريق البديل', text: 'تجد طريقاً سرياً. يقودك لغرفة مليئة بالكتب القديمة. تعرف أسراراً عظيمة!', choices: [{text: 'استمر', next: 26}]},
    {chap: 'النهاية', title: 'الغنيمة', text: 'تهزم حارس الكنز! تحصل على سيف أسطوري. قوتك لا حدود لها الآن!', choices: [{text: 'العب مجدداً', next: 0}]},
    {chap: 'النهاية', title: 'الحكمة', text: 'تتعلم سحراً قديماً. تصبح أقوى ساحر في التاريخ. الطبيعة تُحيى بسحرك!', choices: [{text: 'العب مجدداً', next: 0}]},
  ],
  load(idx) {
    currentStoryIndex = idx;
    const ch = this.chapters[idx];
    $('story-chap').textContent = ch.chap;
    $('story-title').textContent = ch.title;
    $('story-text').textContent = ch.text;
    const choicesDiv = $('story-choices');
    choicesDiv.innerHTML = '';
    $('story-next').style.display = ch.choices ? 'none' : 'block';
    if (ch.choices) {
      ch.choices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = c.text;
        btn.onclick = () => { this.load(c.next); AudioEngine.sfxAttack(); };
        choicesDiv.appendChild(btn);
      });
    }
    if (ch.battle) {
      $('story-next').textContent = '⚔️ قاتل!';
      $('story-next').onclick = () => this.startBattle(ch);
    } else {
      $('story-next').textContent = 'التالي →';
      $('story-next').onclick = () => this.next();
    }
    // Draw scene illustration
    this.drawScene(ch);
  },
  next() {
    const ch = this.chapters[currentStoryIndex];
    if (ch.next !== undefined) { this.load(ch.next); }
    else if (currentStoryIndex < this.chapters.length - 1) { this.load(currentStoryIndex + 1); }
    else { this.load(0); }
  },
  startBattle(ch) {
    const e = ch.battle;
    const enemy = {name: e.name, hp: e.hp, maxHp: e.hp, mp: 50, maxMp: 50, atk: e.atk, def: e.def, element: e.element, rank: 'B', skin: 0, hair: 0, cloth: 0};
    battleData = {player: {...player}, enemy: enemy, turn: 0, log: [], defending: false, storyNext: ch.nextWin, storyLose: ch.nextLose};
    battleData.player.maxHp = player.maxHp; battleData.player.maxMp = player.maxMp;
    showScreen('scr-battle');
    gameState = 'battle';
    BATTLE.log('معركة القصة! ' + player.name + ' ضد ' + e.name);
    BATTLE.updateUI();
    AudioEngine.sfxAttack();
  },
  drawScene(ch) {
    const canvas = $('story-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 400, 200);
    // Background based on chapter
    const bgColors = {'الفصل 1': ['#1a2a1a','#0d1a0d'], 'الفصل 2': ['#2a1a2a','#1a0d1a'], 'الفصل 3': ['#1a1a2a','#0d0d1a'], 'الفصل 4': ['#2a2a1a','#1a1a0d'], 'الفصل 5': ['#2a1a1a','#1a0d0d'], 'النهاية': ['#1a2a2a','#0d1a1a']};
    const chapKey = Object.keys(bgColors).find(k => ch.chap.includes(k)) || 'الفصل 1';
    const grad = ctx.createLinearGradient(0, 0, 0, 200);
    grad.addColorStop(0, bgColors[chapKey][0]);
    grad.addColorStop(1, bgColors[chapKey][1]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 400, 200);
    // Draw trees/mountains based on context
    ctx.fillStyle = '#0d1a0d';
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 55, 200);
      ctx.lineTo(i * 55 + 25, 120 + Math.random() * 40);
      ctx.lineTo(i * 55 + 50, 200);
      ctx.fill();
    }
    // Moon/Sun
    ctx.fillStyle = ch.chap.includes('النهاية') ? '#ffd700' : '#4466aa';
    ctx.beginPath();
    ctx.arc(340, 40, 25, 0, Math.PI*2);
    ctx.fill();
    // Stars
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 400, Math.random() * 100, 1, 0, Math.PI*2);
      ctx.fill();
    }
    // Character silhouette if battle
    if (ch.battle) {
      ctx.fillStyle = 'rgba(255,50,50,0.3)';
      ctx.beginPath();
      ctx.arc(200, 150, 40, 0, Math.PI*2);
      ctx.fill();
      ctx.fillStyle = '#ff3333';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('⚔️ ' + ch.battle.name, 200, 155);
    }
  }
};

// ========================
// TOURNAMENT SYSTEM
// ========================
const TOURNAMENT = {
  opponents: [],
  currentRound: 0,
  wins: 0,
  roundNames: ['ربع النهائي', 'نصف النهائي', 'النهائي'],

  showBracket() {
    if (!player) { showNotif('أنشئ بطلاً أولاً!'); return; }
    const keys = Object.keys(CHAR_DB).filter(k => k !== 'walker_boss' && CHAR_DB[k].name !== player.name);
    const shuffled = [...keys].sort(() => Math.random() - 0.5).slice(0, 7);
    this.opponents = shuffled.map(k => ({...CHAR_DB[k], key:k}));
    this.currentRound = 0;
    this.wins = 0;
    this.renderBracket();
  },

  renderBracket() {
    const div = $('tournament-bracket');
    if (!div) return;
    div.innerHTML = '';
    const title = document.createElement('div');
    title.className = 'bracket-match current';
    title.innerHTML = '<span class="bracket-name">🏆 ' + this.roundNames[this.currentRound] + '</span><span class="bracket-vs">' + (this.wins ? 'الفوز ' + this.wins + '/3' : 'ابدأ البطولة') + '</span><span class="bracket-name">' + (this.opponents[this.currentRound]?.name || 'خصم') + '</span>';
    div.appendChild(title);

    const status = document.createElement('div');
    status.className = 'bracket-match';
    status.innerHTML = '<span class="bracket-name">' + player.name + '</span><span class="bracket-vs">✓ ' + this.wins + ' انتصارات</span><span class="bracket-name">' + (3 - this.wins) + ' جولات متبقية</span>';
    div.appendChild(status);

    this.opponents.forEach((opp, i) => {
      const el = document.createElement('div');
      el.className = 'bracket-match' + (i === this.currentRound ? ' current' : '') + (i < this.currentRound ? ' winner' : '');
      el.innerHTML = '<span class="bracket-name">' + (i < this.currentRound ? '✓ ' : '') + this.roundNames[i % 3] + '</span><span class="bracket-vs">VS</span><span class="bracket-name">' + opp.name + '</span>';
      div.appendChild(el);
    });
  },

  start() {
    if (!player) { showNotif('أنشئ بطلاً أولاً!'); return; }
    if (!this.opponents.length) this.showBracket();
    this.currentRound = 0;
    this.wins = 0;
    this.nextMatch();
  },

  nextMatch() {
    if (this.currentRound >= 3) {
      this.finish();
      return;
    }
    const p2 = this.opponents[this.currentRound];
    if (!p2) { this.finish(); return; }
    const enemy = {...p2, maxHp: p2.maxHp || p2.hp, maxMp: p2.maxMp || p2.mp};
    enemy.hp = enemy.maxHp;
    enemy.mp = enemy.maxMp;
    battleData = {player: {...player}, enemy, turn: 0, log: [], defending: false, tournament: true, tourRound: this.currentRound};
    battleData.player.maxHp = player.maxHp; battleData.player.maxMp = player.maxMp;
    showScreen('scr-battle');
    gameState = 'battle';
    $('hud').style.display = 'block';
    BATTLE.log('🏆 ' + this.roundNames[this.currentRound] + ': ' + player.name + ' ضد ' + enemy.name);
    BATTLE.updateUI();
    AudioEngine.sfxAttack();
  },

  winMatch() {
    this.wins++;
    this.currentRound++;
    // Keep the player's current HP/MP after the match, but restore a portion for the next round.
    if (battleData && battleData.player) {
      player.hp = Math.max(1, Math.min(player.maxHp, battleData.player.hp + Math.floor(player.maxHp * 0.25)));
      player.mp = Math.min(player.maxMp, battleData.player.mp + Math.floor(player.maxMp * 0.25));
    }
    battleData = null;
    $('hud').style.display = 'none';
    if (this.currentRound >= 3) {
      this.finish();
    } else {
      this.renderBracket();
      showScreen('scr-tournament');
      gameState = 'tournament';
      setTimeout(() => this.nextMatch(), 1000);
    }
  },

  loseMatch() {
    battleData = null;
    $('hud').style.display = 'none';
    showNotif('💀 خرجت من البطولة...');
    setTimeout(() => { gameState = 'menu'; showScreen('scr-title'); }, 1800);
  },

  finish() {
    battleData = null;
    $('hud').style.display = 'none';
    showNotif('🏆 بطل البطولة! انتصرت في 3 جولات.');
    AudioEngine.sfxWin();
    setTimeout(() => { gameState = 'menu'; showScreen('scr-title'); }, 2200);
  }
};

// ========================
// GLOBAL ERROR HANDLER
// ========================
window.onerror = function(msg, url, line) {
  console.error('[TFN] Error at line ' + line + ': ' + msg);
  showNotif('خطأ: ' + msg);
  return true;
};

// ========================
// AUTO-LOAD
// ========================
if (localStorage.getItem('nature_save')) {
  const data = JSON.parse(localStorage.getItem('nature_save'));
  if (data && data.player) {
    player = data.player;
    inventory = data.inventory || [];
    settings = data.settings || settings;
  }
}

// ========================
// START
// ========================
GAME.init();


// ================= PREMIUM ULTRA SYSTEMS =================
(function PREMIUM_ULTRA(){
  'use strict';
  const fx = document.getElementById('fxCanvas');
  if(!fx) return;
  const ctx = fx.getContext('2d');
  let W=0,H=0,dpr=1,particles=[],last=0;
  const colors=['#39d9ff','#9b5cff','#ffd166','#ff3d71','#55f28b'];
  function resize(){dpr=Math.min(window.devicePixelRatio||1,2);W=innerWidth;H=innerHeight;fx.width=W*dpr;fx.height=H*dpr;fx.style.width=W+'px';fx.style.height=H+'px';ctx.setTransform(dpr,0,0,dpr,0,0);}
  function burst(x,y,color,count=18,power=2.8){for(let i=0;i<count;i++){const a=Math.random()*Math.PI*2,s=Math.random()*power+.6;particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-1.2,life:1,size:Math.random()*3+1,c:color||colors[(Math.random()*colors.length)|0]});}}
  function tick(t){const dt=Math.min(.032,(t-last)/1000||.016);last=t;ctx.clearRect(0,0,W,H);for(let i=particles.length-1;i>=0;i--){let p=particles[i];p.life-=dt*1.35;p.x+=p.vx*60*dt;p.y+=p.vy*60*dt;p.vy+=3*dt;if(p.life<=0){particles.splice(i,1);continue}ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.c;ctx.shadowBlur=12;ctx.shadowColor=p.c;ctx.beginPath();ctx.arc(p.x,p.y,p.size*p.life,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1;ctx.shadowBlur=0;requestAnimationFrame(tick)}
  resize();addEventListener('resize',resize);addEventListener('orientationchange',()=>setTimeout(resize,250));requestAnimationFrame(tick);
  window.NatureFX={burst};

  // Prevent accidental zoom/scroll and improve touch response.
  document.addEventListener('touchmove',e=>{if(e.target.closest('button,.screen')) e.preventDefault()},{passive:false});
  document.addEventListener('gesturestart',e=>e.preventDefault(),{passive:false});

  // Cinematic feedback around battle actions.
  ['btn-atk','btn-spc','btn-def','btn-heal'].forEach(id=>{const b=document.getElementById(id);if(!b)return;b.addEventListener('click',()=>{const r=b.getBoundingClientRect();const c=id==='btn-heal'?'#55f28b':id==='btn-spc'?'#9b5cff':'#ffd166';burst(r.left+r.width/2,r.top+r.height/2,c,id==='btn-spc'?28:14,id==='btn-spc'?4:2.5);});});

  // Autosave safety net every 20 seconds when a hero exists.
  setInterval(()=>{try{if(typeof player!=='undefined'&&player&&typeof inventory!=='undefined'){localStorage.setItem('nature_save',JSON.stringify({player,inventory,settings}));}}catch(e){}},20000);

  // Upgrade the existing audio into a layered, non-invasive soundscape.
  if(window.AudioEngine){
    const oldAttack=AudioEngine.sfxAttack.bind(AudioEngine), oldHit=AudioEngine.sfxHit.bind(AudioEngine);
    AudioEngine.sfxAttack=function(){oldAttack();this._tone(660,'triangle',.07,.045);};
    AudioEngine.sfxHit=function(){oldHit();this._tone(120,'square',.09,.055);};
  }

  // Keep Android in immersive landscape when possible.
  function landscape(){try{if(screen.orientation&&screen.orientation.lock)screen.orientation.lock('landscape').catch(()=>{});}catch(e){}}
  document.addEventListener('click',landscape,{once:true});
  landscape();

  // Better app lifecycle: save on background and restore visibility.
  document.addEventListener('visibilitychange',()=>{try{if(document.hidden&&typeof player!=='undefined'&&player)localStorage.setItem('nature_save',JSON.stringify({player,inventory,settings}));}catch(e){}});

  // Add subtle hit feedback by observing battle canvas mutations.
  const watch=['battle-p-canvas','battle-e-canvas'];watch.forEach(id=>{const el=document.getElementById(id);if(!el)return;let old='';setInterval(()=>{const sig=el.toDataURL('image/png').slice(-40);if(old&&sig!==old){const r=el.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height*.52,null,8,1.8)}old=sig;},180);});
})();
