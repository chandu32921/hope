document.addEventListener("DOMContentLoaded", function () {
    const headingText = "Madhu...";
    const text1 = "Happy birthday madhu";
    const text2 = "Thank you very much for coming into my life...";
    const text3 = "Asalu chala change ayya Madhu ninnu meet ayyaka, ee friendship ilaantivi evi nammevadne kaadhu alantidhi ninnnu kalisaaka friends ki kooda intha attach avvochu ani thelsindhi..";
    const text4 = "Madhu asalu nv kalavakapothe , btech a vere la untadhi emo, u made it better , maybe its the best.";
    const text5 = "Enno sari chepthnano theleedh kaani ..iswear madhu , nijanga attach aipoya neeku , you are the best of all my friends.";
    const text6 = "You are special to me.";
    const text7 = "We have been through many phases in our friendship , kaani adhento eppudu vidipotham anna thought raale madhu.";
    const text8 = "Evvarini aina , ila antey ala vadhilestha kaani ni visyam lo ala vadhalalenu.";
    const text9 = "NNaaku em matladuthnano theliyatle but , you became a part of my life..and i dont want to loose you.";
    const text10 = "You aren't easy to let go Madhu. Even neetho oka 5 minds unna adhi special le naaku , scilence aina sare , matladina sare.";
    const text11 = "You are the who value my presence Madhu, ..you with me when im low and you are the one who cares.";
    const text12 = "Nen asalu anukole naaku importance ichinavaallu untaru ani , but u proved me wrong,.nv iche importance , im  sure naaku ippati varaku evar ivledhu.";
    const text13 = "Thanks for being with me madhu. Hope our friendship will last forever.";
    const text14 = "Happy Birthday Madhu.";

    animateHeading("heading", headingText, () => {
        animateText("text1", text1, () => {
            animateText("text2", text2, () => {
                animateText("text3", text3, () => {
                    animateText("text4", text4, () => {
                        animateText("text5", text5, () => {
                            animateText("text6", text6, () => {
                                animateText("text7", text7, () => {
                                    animateText("text8", text8, () => {
                                        animateText("text9", text9, () => {
                                            animateText("text10", text10, () => {
                                                animateText("text11", text11, () => {
                                                    animateText("text12", text12, () => {
                                                        animateText("text13", text13, () => {
                                                            animateText("text14", text14);
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
function animateHeading(elementId, text, callback) {
    const element = document.getElementById(elementId);
    let index = 0;

    function showText() {
        element.textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(showText, 50); // Adjust the delay as needed
        } else if (callback) {
            callback();
        }
    }

    showText();
}

function animateText(elementId, text, callback) {
    const element = document.getElementById(elementId);
    let index = 0;

    function showText() {
        element.textContent += text[index];
        index++;

        if (index < text.length) {
            setTimeout(showText, 50); // Adjust the delay as needed
        } else if (callback) {
            callback();
        }
    }

    showText();
}