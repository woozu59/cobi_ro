$(function() {
    // 버튼 클릭시 책검색 출력
    $('#bookSearch').click(function() {
        $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: {
                    query: $('#bookName').val()
                }, //json형식으로 data를 채워준다
                headers: {
                    Authorization: "KakaoAK ddcd7e848b0a8daaeb4a77912c305d8e"
                }
            })
            .done(function(books) {
                // console.log(books);
                $(".bookresult > *").hide(); // tbody의 모든 내역을 감추기
                let bookresult = $(".bookresult");

                // 결과 10개 출력(기본제공 10개)
                for (let i in books.documents) {
                    // let book = books.documents[i];
                    let listNum = Number(i)+1;
                    let bookThumbnail = books.documents[i].thumbnail;
                    let bookTitle = books.documents[i].title;
                    let bookAuthors = books.documents[i].authors;
                    let bookPublisher = books.documents[i].publisher;
                    let bookPrice = books.documents[i].price;
                    bookresult.append(`
                    <tr>
                        <td>${listNum}</td>
                        <td><img src="${bookThumbnail}" alt="${bookTitle}"></td>
                        <td class="bookTitle">${bookTitle}</td>
                        <td>${bookAuthors}</td>
                        <td>${bookPublisher}</td>
                        <td>${bookPrice} 원</td>
                    </tr>
                `);
                }
            })
    });

    // 새로고침할때마다 뉴스 출력
    $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v2/search/web",
            data: {
                query: '코로나19 세종 기자',
                'size': 5
            },
            headers: { Authorization: "KakaoAK ddcd7e848b0a8daaeb4a77912c305d8e" }
        })
        .done(function(news) {
            // console.log(news);
            $(".newsresult > *").hide(); // tbody의 모든 내역을 감추기
            const newsresult = $(".newsresult");

            // 결과 5개 출력
            for (let i in news.documents) {
                let listNum = Number(i)+1;
                const extractSpanPattern = /<(\/b|b)([^>]*)>/gi; // 태그 선택 정규식
                let articleTitle = news.documents[i].title.replace(extractSpanPattern, ''); // <b>태그 제거
                let articleURL = news.documents[i].url;
                let articleFullDate = news.documents[i].datetime;
                let articleDate = articleFullDate.slice(0, 10);
                newsresult.append(`
                <tr>
                    <td>${listNum}</td>
                    <td><a href="${articleURL}" target="_blank">${articleTitle}</a></td>
                    <td>${articleDate}</td>
                </tr>
            `);
            }
        })


    //------------------ 로컬에 있는 txt파일 로드하기

    $("#loadTxtBt").click(function() {
        $("#localTxt").load("../files/지역행정표준코드.txt");
    });
    $("#loadTxtBt2").click(function() {
        $("#localTxt2").load("../files/지역행정표준코드.txt #mainContents");
    });
    $("#loadTxtBt3").click(function() {
        $("#localTxt3").load("../files/지역행정표준코드.txt #main", function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                alert("출력이 잘 되었습니다");
            if (statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});

//------------------ 로컬에 있는 xml파일 로드하기
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "../files/cd_catalog.xml", true);
    xhttp.send();
}

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.querySelector("#cdInfo").innerHTML = table;
}
const xmlExport = document.querySelector('#xmlExport');
xmlExport.addEventListener('click', (e) => loadDoc(e));


