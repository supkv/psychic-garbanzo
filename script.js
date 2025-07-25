document.addEventListener('DOMContentLoaded', function() {
const channels = [
    // --- Kategoria: Ogólne (przeniesione na początek) ---
    {
        id: 0,
        name: 'TVP1',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TVP1',
        description: 'Główny kanał Telewizji Polskiej, oferujący szeroki wybór programów.',
        videoUrl: 'https://wolk.live/players/t1'
    },
    {
        id: 15,
        name: 'TVP2',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TVP2',
        description: 'Drugi kanał Telewizji Polskiej z rozrywką, filmami i serialami.',
        videoUrl: 'https://wolk.live/players/t2'
    },
    {
        id: 16,
        name: 'TVN',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TVN',
        description: 'Popularny kanał rozrywkowy, informacyjny i filmowy.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://dokko1new.newkso.ru/dokko1/premium565/mono.m3u8'
    },
//    {
//        id: 9006,
//        name: 'Puls 2',
//        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Puls2',
//        description: 'Kanał telewizyjny oferujący różnorodne programy rozrywkowe, filmy, seriale oraz reality show, skierowany głównie do młodszej widowni.',
//        videoUrl: 'https://wolk.live/player-hls.html?url=https://4-edge1-eu-west.picarto.tv/stream/hls/golive%2byalido1716/index.m3u8'
//    },
    {
        id: 17,
        name: 'Polsat',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Polsat',
        description: 'Popularny kanał rozrywkowy, informacyjny i filmowy.',
        videoUrl: '//ok.ru/videoembed/10017401151146?autoplay=1'
    },
    // --- Kategoria: Muzyka ---
    {
        id: 14,
        name: '4FUN TV',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=4FUN',
        description: 'Muzyczny kanał telewizyjny z największymi hitami i przebojami. 4FUN TV to rozrywka na najwyższym poziomie.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://stream.4fun.tv:8888/hls/4f_high/index.m3u8'
    },
    {
        id: 1,
        name: 'Eska Hity Na Czasie',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=ESKA+HITY',
        description: 'Twoje ulubione hity na czasie! Najnowsza muzyka, znane przeboje i świetna energia prosto z radia Eska.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https%3A%2F%2Fs-pl-01.mediatool.tv%2Fplayout%2Fespl-abr%2Findex.m3u8'
    },
    {
        id: 2,
        name: 'Eska Rock Dobrze Rockuje',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=ROCK',
        description: 'Mocne gitarowe brzmienia i klasyka rocka. Eska Rock to stacja dla prawdziwych fanów dobrego grania.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https%3A%2F%2Fs-pl-01.mediatool.tv%2Fplayout%2Ferpl-abr%2Findex.m3u8'
    },
    {
        id: 3,
        name: 'SAYHi',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=SAYHi',
        description: 'Kanał młodzieżowy z teledyskami, popkulturą i nowinkami. SAYHi to energia młodego pokolenia!',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://s-pl-01.mediatool.tv/playout/shpl-abr/index.m3u8'
    },
    {
        id: 4,
        name: 'HiMusic',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=HiMusic',
        description: 'Najlepsze brzmienia w jednym miejscu – muzyka pop, dance i topowe listy przebojów!',
        videoUrl: 'https://wolk.live/player-hls.html?url=https%3A%2F%2Fs-pl-01.mediatool.tv%2Fplayout%2Fhmpl-abr%2Findex.m3u8'
    },
    {
        id: 5,
        name: 'HiDance',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=HiDance',
        description: 'Kanał dla fanów tańca i rytmicznych hitów. HiDance to miejsce, gdzie parkiet nigdy nie cichnie!',
        videoUrl: 'https://wolk.live/player-hls.html?url=https%3A%2F%2Fs-pl-01.mediatool.tv%2Fplayout%2Fhdpl-abr%2Findex.m3u8'
    },
//    {
//        id: 8,
//        name: 'MUSIC BOX TV',
//        logo: 'https://placehold.co/150x150/ffffff/f97316?text=MUSIC+BOX',
//        description: 'Kanał muzyczny z najnowszymi teledyskami i hitami.',
//        videoUrl: 'https://embed.megogo.net/ev3/universal?id=20563666&lang=pl&scrolling='
//    }, 
    {
        id: 34,
        name: 'Radio Czwórka',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Radio+Czwórka',
        description: 'Młodzieżowy kanał radiowy z muzyką, kulturą i reportażami.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://stream14.polskieradio.pl/pr4_video/video_pr4.stream/playlist.m3u8'
    },
   {
        id: 7452,
        name: 'VIVA Russia',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=VIVA',
        description: 'Kanał muzyczny, który prezentuje muzykę i rozrywkę, oferując widzom różnorodne programy.',
        videoUrl: 'https://goodgame.ru/player?180805'
    },
    {
        id: 47679,
        name: 'MTV Yo! Raps',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=MTV+Yo!',
        description: '"MTV Yo! Raps" to kanał telewizyjny poświęcony kulturze hip-hopowej, prezentujący teledyski, programy rozrywkowe oraz wywiady z artystami związanymi z rapem i hip-hopem.',
        videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-131307986&id=456239775&hd=2&autoplay=1'
    },
    {
        id: 8673,
        name: 'Spirit TV',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Spirit+TV',
        description: 'Spirit TV to amerykański chrześcijański kanał muzyczny.',
        videoUrl: 'https://wolk.live/player-hls?url=https://cdnlive.myspirit.tv/LS-ATL-43240-2/index.m3u8'
    },
    {
        id: 5993,
        name: 'MTV 90s (smotret.tv)',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=MTV+Classic',
        description: 'Kanał muzyczny z klasycznymi teledyskami i archiwalnymi programami MTV.',
        videoUrl: 'https://smotret.tv/music/iframe/mtv-90s.php'
    },
    {
        id: 50,
        name: 'MTV 80s',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=MTV+80s',
        description: 'Kanał muzyczny grający największe hity z lat 80-tych.',
        videoUrl: 'https://ok.ru/videoembed/7678732148279?nochat=1&autoplay=1'
    },
    {
        id: 51,
        name: 'MTV 00s',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=MTV+00s',
        description: 'Kanał muzyczny grający największe hity z lat 2000-2009.',
        videoUrl: 'https://wolk.live/warn?url=//balkantelevizija.net/iptv-panel/repository/mtv_00s.php'
    },
    {
        id: 594593,
        name: 'MTV 80s (smotret.tv)',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=MTV+Classic',
        description: 'Kanał muzyczny z klasycznymi teledyskami i archiwalnymi programami MTV.',
        videoUrl: 'https://smotret.tv/music/iframes/mtv-80s.html'
    },
    {
        id: 52,
        name: 'MTV Live',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=MTV+Live',
        description: 'Kanał muzyczny z koncertami na żywo i programami muzycznymi.',
        videoUrl: 'https://wolk.live/players/mlive.html'
    },
    {
        id: 53,
        name: 'MTV Classic',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=MTV+Classic',
        description: 'Kanał muzyczny z klasycznymi teledyskami i archiwalnymi programami MTV.',
        videoUrl: 'https://wolk.live/players/mclassic.html'
    },
    {
        id: 5673,
        name: 'V2BEAT TV',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=V2BEAT',
        description: 'V2BEAT TV to międzynarodowy kanał muzyczny skierowany do fanów muzyki pop. Audycja prowadzona jest przez całą dobę w języku angielskim.',
        videoUrl: 'https://wolk.live/player-hls?url=https://abr.de1se01.v2beat.live/playlist.m3u8'
    },
    {
        id: 8673,
        name: 'Spirit TV',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Spirit+TV',
        description: 'Spirit TV to amerykański chrześcijański kanał muzyczny.',
        videoUrl: 'https://wolk.live/player-hls?url=https://cdnlive.myspirit.tv/LS-ATL-43240-2/index.m3u8'
    },

    // --- Kategoria: Wiadomości/Informacje/Publicystyczne ---
    {
        id: 6,
        name: 'TVP Info',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TVP+Info',
        description: 'Polski kanał informacyjny nadający wiadomości i programy publicystyczne na żywo.',
        videoUrl: 'https://www.youtube.com/embed/3jKb-uThfrg?autoplay=1&loop=1&playlist=3jKb-uThfrg'
    },
    {
        id: 11,
        name: 'Polsat News',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Polsat+News',
        description: 'Wiadomości i informacje z kraju i ze świata.',
        videoUrl: 'https://partner.ipla.tv/embed/XNgSz8/media/1517830/live'
    },
    {
        id: 12,
        name: 'Polsat News Polityka',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Polsat+Polityka',
        description: 'Aktualności i analizy ze świata polityki.',
        videoUrl: 'https://embed-e2-16.pluscdn.pl/embed/BL6S72/media/1511888/live'
    },
    {
        id: 13,
        name: 'TV Republika',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TV+Republika',
        description: 'Niezależny kanał informacyjny i publicystyczny.',
        videoUrl: 'https://youtube.com/embed/dzntyCTgJMQ'
    },
    {
        id: 117,
        name: 'wPolsce24',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=wPolsce24',
        description: 'Kanał informacyjny grupy Fratria.',
        videoUrl: 'https://youtube.com/embed/DcjNCGnHtbc'
    },
    {
        id: 22,
        name: 'Echo24',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Echo24',
        description: 'Regionalny kanał informacyjny z Wrocławia i Dolnego Śląska.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://echo24new.pl/LiveAppStreamECHO24/streams/GL0VksiIgQUS1672825288490.m3u8'
    },
    {
        id: 23,
        name: 'Euronews',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Euronews',
        description: 'Międzynarodowy kanał informacyjny, nadający wiadomości z Europy i świata.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://euronews-live-pol-pl.fast.rakuten.tv/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6769/bitok/eyJzdGlkIjoiNDgyYjMzYzEtYmYwYi00NTIzLThlMGMtZGVmY2ZkNjYyMGU1IiwibWt0IjoicGwiLCJjaCI6Njc2OSwicHRmIjo1fQ%3D%3D/26235/euronews-pl.m3u8'
    },
    {
        id: 24,
        name: 'EWTN',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=EWTN',
        description: 'Katolicki kanał telewizyjny.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://cdn3.wowza.com/1/ZHdrMWt1NjlDSzFu/bzdDVG10/hls/live/playlist.m3u8'
    },
    {
        id: 38,
        name: 'SuperExpess',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=SuperExpress',
        description: 'Wiadomości z kraju i ze świata, plotki i rozrywka.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://s-pl-01.mediatool.tv/playout/sepl-abr/index.m3u8'
    },
    {
        id: 39,
        name: 'Telewizja Biznesowa',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Biznesowa',
        description: 'Kanał poświęcony biznesowi, gospodarce i rynkom finansowym.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://s-pl-01.mediatool.tv/playout/tbpl-abr/index.m3u8'
    },
    {
        id: 40,
        name: 'Imperium TV',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Imperium+TV',
        description: 'Telewizja internetowa z różnorodnymi programami.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://91-193-208-10.eimperium.pl/TVIMPERIUM/index.m3u8'
    },

    // --- Kategoria: Rozrywka/Filmy/Styl Życia/Sport ---
    {
        id: 9,
        name: 'RAKUTEN TV',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=RAKUTEN+TV',
        description: 'Darmowe filmy, seriale i programy na żywo.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://top-movies-rakuten-tv-pl.fast.rakuten.tv/v1/manifest/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6059/81e954d1-dd70-4212-b7f3-7157047b627b/4.m3u8'
    },
    {
        id: 19,
        name: 'Viasat Explore Classic',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Viasat+Explore',
        description: 'Dokumenty i programy przygodowe z całego świata.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://da9c49fa.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLXBsX1ZpYXNhdEV4cGxvcmVfSExT/playlist.m3u8'
    },
    {
        id: 20,
        name: 'Bigtime',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Bigtime',
        description: 'Filmy i seriale akcji, sci-fi i thriller.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://103f01c3ff79408e83c9212f8a374ecc.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/RakutenTV-eu_BjgtjmeDarmoweFilmy/playlist.m3u8'
    },
    {
        id: 25,
        name: 'FIFA+',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=FIFA%2B',
        description: 'Kanał poświęcony piłce nożnej, archiwalnym meczom i dokumentom.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8'
    },
    {
        id: 26,
        name: 'Grjngo',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Grjngo',
        description: 'Kanał z klasycznymi westernami.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://b6c7c7d1020a4588982ca7c2625f85d1.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/RakutenTV-eu_GrjngoWesterny/playlist.m3u8'
    },
    {
        id: 27,
        name: 'Hard Knocks Fighting Championship',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=HKFC',
        description: 'Kanał z walkami MMA i sportami walki.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://d39g1vxj2ef6in.cloudfront.net/v1/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/2ee2b8d4-acc4-4296-9dc8-66f1ffd0fff8/5.m3u8'
    },
    {
        id: 28,
        name: 'Moconomy',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Moconomy',
        description: 'Kanał o ekonomii, finansach i biznesie.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://3ee905090d464be5a51478fd9c642e93.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/RakutenTV-pl_Moconomy/playlist.m3u8'
    },
    {
        id: 29,
        name: 'Monster Jam',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Monster+Jam',
        description: 'Kanał z wyścigami monster trucków.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://4b9627c7.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X01vbnN0ZXJKYW1fSExT/playlist.m3u8'
    },
    {
        id: 31,
        name: 'People Are Awesome',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=People+Awesome',
        description: 'Kompilacje niesamowitych wyczynów i umiejętności ludzi z całego świata.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://3ab76e42.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X1Blb3BsZUFyZUF3ZXNvbWVfSExT/playlist.m3u8'
    },
    {
        id: 32,
        name: 'PFL MMA',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=PFL+MMA',
        description: 'Professional Fighters League – walki MMA na najwyższym poziomie.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://a883593c.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X1BGTE1NQV9ITFM/playlist.m3u8'
    },
    {
        id: 35,
        name: 'Red Carpet TV International',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Red+Carpet',
        description: 'Kanał o celebrytach, wydarzeniach branżowych i stylu życia.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://fast-rakuten.okast.tv/fa2e8c4385712f9a9076eaf728c751de/channels/1a6ecfaa-40c6-41b8-8634-595c424f856e/21f67fd1-4d21-43ba-8ad8-3afac9982c25/master.m3u8'
    },
    {
        id: 36,
        name: 'Revry',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Revry',
        description: 'Kanał LGBTQ+ z filmami, serialami i programami dokumentalnymi.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://99d8b4b6.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X1JldnJ5X0hMUw/playlist.m3u8'
    },
    {
        id: 37,
        name: 'Royalworld',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Royalworld',
        description: 'Wszystko o rodzinach królewskich i ich życiu.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://ac76260b1102416c93f3d20958bfeb4b.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/RakutenTV-pl_Royalworld/playlist.m3u8'
    },
    {
        id: 54,
        name: 'TVP Sport',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TVP+Sport',
        description: 'Kanał sportowy Telewizji Polskiej, transmitujący wydarzenia sportowe.',
        videoUrl: 'https://wolk.live/players/ts'
    },

    // --- Kategoria: Dzieci ---
//    {
//        id: 7,
//        name: 'BFDI TV',
//        logo: 'https://placehold.co/150x150/ffffff/f97316?text=BFDI',
//        description: 'Kanał z popularną animacją Battle for Dream Island – śledź losy ulubionych bohaterów!',
//        videoUrl: 'https://www.youtube.com/embed/X4Ms_v8WRII?autoplay=1&loop=1&playlist=X4Ms_v8WRII'
//    },
    {
        id: 10,
        name: 'TVP ABC',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TVP+ABC',
        description: 'Kanał telewizyjny dla dzieci z bajkami, programami edukacyjnymi i rozrywkowymi.',
        videoUrl: 'https://krainaabc.tvp.pl/tv-online'
    },
    {
        id: 18,
        name: 'Tom i Jerry',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Tom+and+Jerry',
        description: 'Oficjalny kanał z przygodami Tom and Jerry.',
        videoUrl: 'https://catcast.tv/player/43075'
    },
    {
        id: 21,
        name: 'Car City Adventures',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Cat+City',
        description: 'Animowany serial dla dzieci o przygodach w Kocim Mieście.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://d39g1vxj2ef6in.cloudfront.net/v1/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/b6397b24-18b0-49c2-80bf-0333ae568e37/5.m3u8'
    },
    {
        id: 1234,
        name: 'Nickelodeon Compilation',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=NICK+YT',
        description: 'Kanał prezentuje najlepsze momenty oraz klasyczne fragmenty z popularnych programów telewizyjnych emitowanych na Nickelodeon.',
        videoUrl: 'https://catcast.tv/player/48829'
    },
    
    // --- Kategoria: Regionalne/Lokalne ---
    {
        id: 30,
        name: 'Murator.pl',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Murator',
        description: 'Kanał dla miłośników budownictwa, remontów i wystroju wnętrz.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://s-pl-01.mediatool.tv/playout/mupl-abr/index.m3u8'
    },
    {
        id: 33,
        name: 'PoradnikZdrowie.pl',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=Poradnik+Zdrowie',
        description: 'Kanał o zdrowiu, medycynie i zdrowym stylu życia.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://s-pl-01.mediatool.tv/playout/pzpl-abr/index.m3u8'
    },
    {
        id: 41,
        name: 'TVJaslo',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TV+Jasło',
        description: 'Lokalna telewizja internetowa z Jasła.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://cdn01.aztv.pl/live_tvjaslo/live_tvjaslo.stream/playlist.m3u8'
    },
    {
        id: 42,
        name: 'TV Toruń',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TV+Toruń',
        description: 'Lokalna telewizja z Torunia.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://mediaserwer.tvk.torun.pl/live/ngrp:tvk.stream_mobile/manifest_w107837920.m3u8'
    },
    {
        id: 44,
        name: 'TV TRUSO',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TV+TRUSO',
        description: 'Lokalna telewizja z Elbląga.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://stream.truso.tv/elblag/myStream_aac/playlist.m3u8'
    },
    {
        id: 45,
        name: 'TV ASTA',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TV+ASTA',
        description: 'Telewizja regionalna z Piły.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://5cce8c6f0e84c.streamlock.net/LiveCast/smil:PlayStream9.smil/playlist.m3u8'
    },
    {
        id: 46,
        name: 'TV Kujawy',
        logo: 'https://placehold.co/150x150/ffffff/f97316?text=TV+Kujawy',
        description: 'Lokalna telewizja z regionu Kujaw.',
        videoUrl: 'https://wolk.live/player-hls.html?url=https://stream.tvkujawy.pl:8090/live/broadcast.m3u8'
    }
];

    const channelListContainer = document.getElementById('channel-list');
    const videoPlayer = document.getElementById('video-player');
    const loadingOverlay = document.getElementById('loading-overlay');
    const channelInfoLogo = document.getElementById('channel-info-logo');
    const channelInfoName = document.getElementById('channel-info-name');
    const channelInfoDesc = document.getElementById('channel-info-desc');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const channelSearchInput = document.getElementById('channel-search-input');

    let currentChannelId = null; // Ustawiamy na null, aby nie wybierać domyślnego kanału

    function renderChannelList(channelsToRender = channels) {
        channelListContainer.innerHTML = '';
        if (channelsToRender.length === 0) {
            channelListContainer.innerHTML = '<p class="text-gray-400 text-center">Brak kanałów pasujących do wyszukiwania.</p>';
            return;
        }

        channelsToRender.forEach(channel => {
            const channelDiv = document.createElement('div');
            channelDiv.className = `channel-item p-3 rounded-lg flex items-center space-x-4 cursor-pointer border-2 border-transparent transition duration-300 hover:bg-orange-600/50 ${channel.id === currentChannelId ? 'active' : ''}`;
            channelDiv.dataset.channelId = channel.id;

            const logo = document.createElement('img');
            logo.src = channel.logo;
            logo.alt = `Logo ${channel.name}`;
            logo.className = 'w-10 h-10 rounded-md object-contain bg-white p-1';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'font-semibold';
            nameSpan.textContent = channel.name;

            channelDiv.appendChild(logo);
            channelDiv.appendChild(nameSpan);

            channelDiv.addEventListener('click', () => {
                selectChannel(channel.id);
            });

            channelListContainer.appendChild(channelDiv);
        });
    }

    function selectChannel(id) {
        if (id === currentChannelId && videoPlayer.src) {
            console.log(`Kanał ${id} jest już aktywny i odtwarzany. Nie ma potrzeby ponownego ładowania.`);
            return; 
        }
        
        currentChannelId = id;
        const channel = channels.find(c => c.id === id);

        if (!channel) {
            console.error(`Kanał o ID ${id} nie został znaleziony.`);
            return;
        }

        loadingOverlay.classList.remove('opacity-0', 'pointer-events-none');
        loadingOverlay.classList.add('opacity-100');

        document.querySelectorAll('.channel-item').forEach(item => {
            item.classList.remove('active');
        });
        const selectedChannelElement = document.querySelector(`.channel-item[data-channel-id="${id}"]`);
        if (selectedChannelElement) {
            selectedChannelElement.classList.add('active');
        }

        setTimeout(() => {
            videoPlayer.src = channel.videoUrl;
            channelInfoLogo.src = channel.logo;
            channelInfoName
            channelInfoName.textContent = channel.name;
            channelInfoDesc.textContent = channel.description;

            loadingOverlay.classList.remove('opacity-100');
            loadingOverlay.classList.add('opacity-0', 'pointer-events-none');

            // Zaktualizuj URL bez odświeżania strony
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('id', id);
            window.history.pushState({ channelId: id }, '', newUrl);
        }, 800);
    }

    // Funkcja do sprawdzania URL i automatycznego wyboru kanału
    function checkUrlForChannel() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (id) {
            const channelId = parseInt(id, 10);
            const channel = channels.find(c => c.id === channelId);
            if (channel) {
                selectChannel(channelId);
            }
        }
    }

    channelSearchInput.addEventListener('input', () => {
        const searchQuery = channelSearchInput.value.toLowerCase();
        const filteredChannels = channels.filter(channel => 
            channel.name.toLowerCase().includes(searchQuery)
        );
        renderChannelList(filteredChannels);
    });

    renderChannelList();
    checkUrlForChannel(); // Sprawdź URL przy ładowaniu strony

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});
