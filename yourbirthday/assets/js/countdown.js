// const tanggalTujuan = new Date('Januari 30, 2027 00:00:00').getTime();

// const hitungMundur = setInterval(function () {

//     const sekarang = new Date().getTime();
//     const selisih = tanggalTujuan - sekarang;

//     const hari = Math.floor(selisih / (1000 * 60 * 60 * 60 * 24));

//     const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

//     const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));

//     const detik = Math.floor(selisih % (1000 * 60) / 1000);

//     const teks = document.getElementById('teks');

//     teks.innerHTML = hari + " : " + jam + ' : ' + menit + ' : ' + detik;

//     console.log(teks);

//     if (selisih == 0) {
//         clearInterval(hitungMundur);
//         teks.innerHTML = '00 : 00 : 00 : 00';
//     }

// }, 1000);

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let offer = "Jan 29, 2026 00:00:00",
        countDown = new Date(offer).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("teks")
                // countdown = document.getElementById("countdown"),
                // content = document.getElementById("content");

                headline.innerText = "00 : 00 : 00 : 00";
                // countdown.style.display = "none";
                // content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());