window.onload = function(){Setup()}

function Setup()
{

    document.getElementById("Btn1").addEventListener("click", function(){ChangeText(1);});
    document.getElementById("Btn2").addEventListener("click", function(){ChangeText(2);});
    document.getElementById("Btn3").addEventListener("click", function(){ChangeText(3);});
    document.getElementById("Btn4").addEventListener("click", function(){ChangeText(4);});
}

function ChangeText(id)
{
    switch (id)
    {
        case 1:
            document.getElementById("Header2Text").innerHTML = "Dźwięki przykładowe";
            document.getElementById("Description").innerHTML = "Pierwszy dźwięk to ćwiczenie ze zgłaśnianiem i przyciszaniem, a drugi dźwięk to muzyka z nagraniem głosowym.";
            document.getElementById("audio1").style.visibility = "visible";
            document.getElementById("audio2").style.visibility = "visible";
            break;

        case 2:
            document.getElementById("Header2Text").innerHTML = "Format .Ogg";
            document.getElementById("Description").innerHTML = "format kontenera strumieni danych, opracowany przez fundację Xiph.org, stworzony, by wspierać inicjatywy związane z rozwojem wolnego oprogramowania do kodowania i dekodowania multimediów.<br>Często spotykany zapis wielkimi literami „OGG” jest nieprawidłowy.<br>Jest to także nazwa rodziny kodeków, co powoduje częste nieporozumienia: np. film zapisany w kontenerze AVI może zawierać strumień dźwięku Vorbis, a w kontenerze Ogg może znajdować się strumień dźwięku w formacie MP3 i obraz kodowany jako DivX/Xvid.<br>Kontener Ogg może zawierać wiele multipleksowanych strumieni dźwięku, obrazu i napisów. Zgodnie ze specyfikacją, pliki audio zawierające muzykę mają rozszerzenie .oga, pliki wideo rozszerzenie .ogv, a aplikacje zawarte w tym kontenerze rozszerzenie .ogx. Dla kontenera zawierającego tylko dźwięk w formacie Vorbis używa się rozszerzenia .ogg.";
            break;

        case 3:
            document.getElementById("Header2Text").innerHTML = "Format .MP3";
            document.getElementById("Description").innerHTML = "(ang. MPEG-1/MPEG-2 Audio Layer 3) – algorytm kompresji stratnej dźwięku zapisanego w postaci sygnału cyfrowego. Popularnie zwany formatem MP3 lub standardem MP3. Jest zdefiniowany przez Internet Engineering Task Force (IETF) w dokumencie RFC 5219. Ochrona patentowa formatu MP3 we wspólnocie wygasła w 2012, w kwietniu 2017 wygasł ostatni patent chroniący MP3 w Stanach Zjednoczonych. Częściową ochronę zapewniały dwa patenty, które wygasły w 2017. W związku z tym zakończono wydawanie licencji.";
            break;

        case 4:
            document.getElementById("Header2Text").innerHTML = "Format .WAV";
            document.getElementById("Description").innerHTML = "(ang. waveform audio format) – format plików dźwiękowych stworzony przez Microsoft oraz IBM. WAVE bazuje na formacie RIFF, poszerzając go o informacje o strumieniu audio, takie jak użyty kodek, częstotliwość próbkowania czy liczba kanałów. WAV podobnie jak RIFF został przewidziany dla komputerów IBM PC, toteż wszystkie zmienne zapisywane są w formacie little endian. Odpowiednikiem WAV dla komputerów Macintosh jest AIFF.<br>Pliki WAVE mogą być zapisane przy użyciu dowolnych kodeków audio, ale zazwyczaj stosuje się nieskompresowany format PCM, w którym pliki zajmują około 172 kB na sekundę dla jakości CD. Ze względu na fakt, iż pole reprezentujące rozmiar pliku jest liczbą 32-bitową, wielkość pliku jest ograniczona do maksymalnie 4 GB.";
            break;

        default:
            document.getElementById("Header2Text").innerHTML = "[BŁĄD]";
            document.getElementById("Description").innerHTML = "Złe ID";
            break;
    }
    if(id != 1)
    {
        document.getElementById("audio1").style.visibility = "hidden";
        document.getElementById("audio2").style.visibility = "hidden";
    }
}