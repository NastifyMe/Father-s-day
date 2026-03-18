const no = document.querySelector('.main_no_button')
const yes = document.querySelector('.main_yes_button')
const main = document.querySelector('.main')
const contaner_no = document.querySelector('.contaner_no')
const back = document.querySelector('.back')
const chooseBack = document.querySelector('.choose-back')
const choose = document.querySelector('.container-choose')
const containerList = document.querySelector('.container_list')
const listBack = document.querySelector('.list-back')
const listFoto = document.querySelector('.list-foto')
const containerFotos = document.querySelector('.container-fotos')
const fotosBack = document.querySelector('.fotos-back')
const fotosFoto = document.querySelector('.fotos-foto')


no.addEventListener('click', () => {
    main.style.display = 'none'
    contaner_no.style.display = 'flex'
})

back.addEventListener('click', () => {
    main.style.display = 'flex'
    contaner_no.style.display = 'none'
})

yes.addEventListener('click', () => {
    main.style.display = 'none'
    choose.style.display = 'flex'
})

chooseBack.addEventListener('click', () => {
    main.style.display = 'flex'
    choose.style.display = 'none'
})

listFoto.addEventListener('click', () => {
    containerList.style.display = 'flex'
    choose.style.display = 'none'
})

listBack.addEventListener('click', () => {
    containerList.style.display = 'none'
    choose.style.display = 'flex'
})

fotosFoto.addEventListener('click', () => {
    choose.style.display = 'none'
    containerFotos.style.display = 'flex'
})

fotosBack.addEventListener('click', () => {
    choose.style.display = 'flex'
    containerFotos.style.display = 'none'
})

const translations = {
    ru: `Ты самый крутой, сильный и смешной папа на свете! 💪😄<br>
    Ты можешь всё починить… ну почти всё 🔧😅<br>
    Иногда кажется, что ты знаешь ответы на все вопросы 🧠✨<br><br>
    Люблю твою улыбку, как пивасик — рыбку 🍺🐟<br>
    ПАПА — это вам не МАМА, с папой можно всё 😎<br>
    Папа может всё… просто ещё не пробовал 😏<br><br>
    Скажите папе, что вам нужно, и он обязательно скажет, как вам без этого обойтись 😄<br><br>
    Короче, ты топовый! Люблю тебя 💙`,
  
    en: `You are the coolest, strongest and funniest dad in the world! 💪😄<br>
    You can fix anything… well, almost anything 🔧😅<br>
    Sometimes it feels like you know the answer to everything 🧠✨<br><br>
    I love your smile like beer loves fish 🍺🐟<br>
    Dad is not mom — with dad you can do anything 😎<br>
    Dad can do everything… just hasn’t tried yet 😏<br><br>
    Tell dad what you need and he’ll tell you how to live without it 😄<br><br>
    Anyway, you’re awesome! Love you 💙`,
  
    de: `Du bist der coolste, stärkste und lustigste Papa der Welt! 💪😄<br>
    Du kannst alles reparieren… na ja, fast alles 🔧😅<br>
    Manchmal scheint es, als wüsstest du auf alles eine Antwort 🧠✨<br><br>
    Ich liebe dein Lächeln wie Bier Fisch liebt 🍺🐟<br>
    Papa ist nicht Mama — mit Papa geht alles 😎<br>
    Papa kann alles… er hat es nur noch nicht ausprobiert 😏<br><br>
    Sag Papa, was du brauchst, und er sagt dir, wie du ohne das auskommst 😄<br><br>
    Kurz gesagt: Du bist der Beste! Ich liebe dich 💙`,
  
    es: `¡Eres el papá más genial, fuerte y divertido del mundo! 💪😄<br>
    Puedes arreglar todo… bueno, casi todo 🔧😅<br>
    A veces parece que sabes la respuesta a todo 🧠✨<br><br>
    Me encanta tu sonrisa como la cerveza con pescado 🍺🐟<br>
    Papá no es mamá — con papá se puede todo 😎<br>
    Papá puede todo… solo que aún no lo ha intentado 😏<br><br>
    Dile a papá lo que necesitas y te dirá cómo vivir sin eso 😄<br><br>
    En fin, eres el mejor. Te quiero 💙`,
  
    ko: `당신은 세상에서 가장 멋지고, 강하고, 웃긴 아빠예요! 💪😄<br>
    당신은 뭐든지 고칠 수 있어요… 거의 다요 🔧😅<br>
    가끔은 모든 답을 알고 있는 것 같아요 🧠✨<br><br>
    맥주와 생선처럼 당신의 미소가 좋아요 🍺🐟<br>
    아빠는 엄마가 아니에요 — 아빠랑은 뭐든 할 수 있어요 😎<br>
    아빠는 뭐든 할 수 있어요… 아직 안 해봤을 뿐 😏<br><br>
    아빠에게 필요한 걸 말하면, 그건 없이 사는 방법을 알려줄 거예요 😄<br><br>
    한마디로, 최고예요! 사랑해요 💙`,
  
    fr: `Tu es le papa le plus cool, fort et drôle du monde ! 💪😄<br>
    Tu peux tout réparer… enfin presque tout 🔧😅<br>
    Parfois on dirait que tu connais toutes les réponses 🧠✨<br><br>
    J’aime ton sourire comme la bière aime le poisson 🍺🐟<br>
    Papa ce n’est pas maman — avec papa, tout est possible 😎<br>
    Papa peut tout faire… il n’a juste pas encore essayé 😏<br><br>
    Dis à papa ce dont tu as besoin et il te dira comment vivre sans 😄<br><br>
    Bref, tu es le meilleur ! Je t’aime 💙`,
  
    ar: `أنت أروع وأقوى وأظرف أب في العالم! 💪😄<br>
    يمكنك إصلاح أي شيء… تقريبًا 🔧😅<br>
    أحيانًا يبدو أنك تعرف إجابة كل شيء 🧠✨<br><br>
    أحب ابتسامتك كما يحب السمك البيرة 🍺🐟<br>
    الأب ليس كالأم — مع الأب كل شيء ممكن 😎<br>
    الأب يستطيع كل شيء… فقط لم يجرب بعد 😏<br><br>
    أخبر أبي بما تحتاجه، وسيخبرك كيف تعيش بدونه 😄<br><br>
    باختصار، أنت الأفضل! أحبك 💙`
  };

const text = document.querySelector(".main-text");
const buttons = document.querySelectorAll(".container-languages p");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.className; // берём класс (ru, en, es...)

    text.innerHTML = translations[lang];

    // подсветка активного языка
    buttons.forEach(b => b.classList.remove("active-lang"));
    btn.classList.add("active-lang");
  });
});