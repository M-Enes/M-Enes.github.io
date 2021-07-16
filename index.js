const htmlEl = document.getElementsByTagName('html').item(0);
const title = document.getElementsByTagName('title').item(0);
const navlinks = document.getElementsByClassName('navigation-link');
const langButton = document.getElementById('lang-button');
const heroContent = document.getElementsByClassName('hero-content').item(0);
const workingHeader = document.getElementById('working').children.item(0).children.item(0);
const cardBodies = document.getElementsByClassName("card-body");
const linkbuttons = document.getElementsByClassName('link-button');
const contactHeader = document.getElementById('contact').children.item(0).children.item(0);

function changeLang(){
    if (htmlEl.lang === "en")
    {
        htmlEl.lang = "tr";
        title.innerText = "Muhammed Enes Karaca | Kişisel Websitesi";
        navlinks.item(0).innerHTML = 'Hakkında';
        navlinks.item(1).innerHTML = 'Ne üzerinde çalışıyorum?';
        navlinks.item(2).innerHTML = 'İletişim';
        langButton.children.item(0).innerText = "English Language";
        langButton.children.item(1).innerText = "🇬🇧";
        heroContent.children.item(1).innerHTML = "Web Geliştirici, Araştırmacı";
        heroContent.children.item(2).innerHTML = "Mühendisliği, geliştirmeyi ve bilimi araştırmayı seviyorum.";
        workingHeader.innerHTML = "Ne üzerinde çalışıyorum?";
        cardBodies.item(0).innerHTML = "Saf Python biliyorum. Python kullanarak işlerimi otomatikleştiren kodlar yazıyorum.";
        cardBodies.item(1).innerHTML = "C#'ı seviyorum. C# ile Blazor uygulamaları veya MVC websiteleri gibi projeler geliştiriyorum.";
        cardBodies.item(2).innerHTML = "Html, Css ve JavaScript web geliştirme için gereklidir. Bunları öğrenmeye web projeleri ile devam ediyorum.";
        cardBodies.item(3).innerHTML = "C++ popüler ve yaygın olarak kullanılan bir programlama dilidir. Şu an C++ öğreniyorum.";
        linkbuttons.item(0).children.item(0).innerHTML = "Çalışmaları Gör"
        linkbuttons.item(1).children.item(0).innerHTML = "Çalışmaları Gör"
        linkbuttons.item(2).children.item(0).innerHTML = "Çalışmaları Gör"
        linkbuttons.item(3).children.item(0).innerHTML = "Çalışmaları Gör"
        contactHeader.innerHTML = "İletişim";
    }
    else {
        htmlEl.lang = "en";
        title.innerText = "Muhammed Enes Karaca | Personal Website";
        navlinks.item(0).innerHTML = 'About';
        navlinks.item(1).innerHTML = 'What i working about?';
        navlinks.item(2).innerHTML = 'Contact';
        langButton.children.item(0).innerText = "Turkish Language";
        langButton.children.item(1).innerText = "🇹🇷";
        heroContent.children.item(1).innerHTML = "Web Developer, Researcher";
        heroContent.children.item(2).innerHTML = "I love engineering, developing and researching science.";
        workingHeader.innerHTML = "What i working about?";
        cardBodies.item(0).innerHTML = "I know pure Python. I write a code using Python, that automates my works.";
        cardBodies.item(1).innerHTML = "I love C#. I'm developing new projects with him like Blazor Apps or MVC websites.";
        cardBodies.item(2).innerHTML = "Html, Css and JavaScript are necessary for web development.I continue learn these with the web projects.";
        cardBodies.item(3).innerHTML = "C++ is a popular and widely used programming language. I learning C++ now.";
        linkbuttons.item(0).children.item(0).innerHTML = "Learn More"
        linkbuttons.item(1).children.item(0).innerHTML = "Learn More"
        linkbuttons.item(3).children.item(0).innerHTML = "Learn More"
        linkbuttons.item(2).children.item(0).innerHTML = "Learn More"
        contactHeader.innerHTML = "Contact";
    }
}