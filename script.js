// ========== DATI ==========
const authors = [
    { id: 'dannunzio', name: "Gabriele D'Annunzio", nationality: 'Italiana', category: 'italian', bio: 'Poeta, scrittore e drammaturgo italiano' },
    { id: 'leopardi', name: 'Giacomo Leopardi', nationality: 'Italiana', category: 'italian', bio: 'Poeta, filosofo e scrittore italiano' },
    { id: 'pascoli', name: 'Giovanni Pascoli', nationality: 'Italiana', category: 'italian', bio: 'Poeta e scrittore italiano' },
    { id: 'ungaretti', name: 'Giuseppe Ungaretti', nationality: 'Italiana', category: 'italian', bio: 'Poeta italiano, esponente dell\'ermetismo' },
    { id: 'montale', name: 'Eugenio Montale', nationality: 'Italiana', category: 'italian', bio: 'Poeta italiano, Premio Nobel per la Letteratura' },
    { id: 'querini', name: 'Aleardo Aleardi', nationality: 'Italiana', category: 'italian', bio: 'Poeta e patriota italiano' },
    { id: 'carducci', name: 'Giosuè Carducci', nationality: 'Italiana', category: 'italian', bio: 'Poeta italiano, Premio Nobel per la Letteratura' },
    { id: 'foscolo', name: 'Ugo Foscolo', nationality: 'Italiana', category: 'italian', bio: 'Poeta e scrittore italiano' },
    { id: 'petrarca', name: 'Francesco Petrarca', nationality: 'Italiana', category: 'italian', bio: 'Poeta e umanista italiano' },
    { id: 'dante', name: 'Dante Alighieri', nationality: 'Italiana', category: 'italian', bio: 'Poeta, scrittore e politico italiano' },
    { id: 'boccaccio', name: 'Giovanni Boccaccio', nationality: 'Italiana', category: 'italian', bio: 'Scrittore e poeta italiano' },
    { id: 'manzoni', name: 'Alessandro Manzoni', nationality: 'Italiana', category: 'italian', bio: 'Scrittore, poeta e drammaturgo italiano' },
    { id: 'shakespeare', name: 'William Shakespeare', nationality: 'Inglese', category: 'famous', bio: 'Drammaturgo e poeta inglese' },
    { id: 'neruda', name: 'Pablo Neruda', nationality: 'Cilena', category: 'famous', bio: 'Poeta cileno, Premio Nobel per la Letteratura' },
    { id: 'lorca', name: 'Federico García Lorca', nationality: 'Spagnola', category: 'famous', bio: 'Poeta e drammaturgo spagnolo' },
    { id: 'rimbaud', name: 'Arthur Rimbaud', nationality: 'Francese', category: 'famous', bio: 'Poeta francese' },
    { id: 'baudelaire', name: 'Charles Baudelaire', nationality: 'Francese', category: 'famous', bio: 'Poeta francese' },
    { id: 'goethe', name: 'Johann Wolfgang von Goethe', nationality: 'Tedesca', category: 'famous', bio: 'Scrittore, poeta e drammaturgo tedesco' },
    { id: 'pessoa', name: 'Fernando Pessoa', nationality: 'Portoghese', category: 'famous', bio: 'Poeta e scrittore portoghese' },
    { id: 'rilke', name: 'Rainer Maria Rilke', nationality: 'Tedesca', category: 'famous', bio: 'Poeta austriaco' },
    { id: 'tagore', name: 'Rabindranath Tagore', nationality: 'Indiana', category: 'famous', bio: 'Poeta e scrittore indiano, Premio Nobel per la Letteratura' },
    { id: 'plath', name: 'Sylvia Plath', nationality: 'Americana', category: 'famous', bio: 'Poetessa e scrittrice americana' },
    { id: 'poe', name: 'Edgar Allan Poe', nationality: 'Americana', category: 'famous', bio: 'Scrittore, poeta e critico letterario americano' },
    { id: 'wilde', name: 'Oscar Wilde', nationality: 'Irlandese', category: 'famous', bio: 'Scrittore, poeta e drammaturgo irlandese' },
    { id: 'saba', name: 'Umberto Saba', nationality: 'Italiana', category: 'niche', bio: 'Poeta e scrittore italiano' },
    { id: 'penna', name: 'Sandro Penna', nationality: 'Italiana', category: 'niche', bio: 'Poeta italiano' },
    { id: 'betocchi', name: 'Carlo Betocchi', nationality: 'Italiana', category: 'niche', bio: 'Poeta italiano' },
    { id: 'moricz', name: 'Sándor Márai', nationality: 'Ungherese', category: 'niche', bio: 'Scrittore e poeta ungherese' },
    { id: 'celan', name: 'Paul Celan', nationality: 'Rumena', category: 'niche', bio: 'Poeta di lingua tedesca' },
    { id: 'akhmatova', name: 'Anna Achmatova', nationality: 'Russa', category: 'niche', bio: 'Poetessa russa' },
    { id: 'tsvetaeva', name: 'Marina Cvetaeva', nationality: 'Russa', category: 'niche', bio: 'Poetessa russa' },
    { id: 'mandelstam', name: "Osip Mandel'štam", nationality: 'Russa', category: 'niche', bio: 'Poeta russo' },
    { id: 'vallejo', name: 'César Vallejo', nationality: 'Peruviana', category: 'niche', bio: 'Poeta peruviano' },
    { id: 'jimenez', name: 'Juan Ramón Jiménez', nationality: 'Spagnola', category: 'niche', bio: 'Poeta spagnolo, Premio Nobel per la Letteratura' },
];

const quotes = [
    // Gabriele D'Annunzio
    { text: "Ti amo come si ama l'acqua, il sole, la luce, la vita.", author: "Gabriele D'Annunzio" },
    { text: "L'amore è il miracolo della natura, il segreto dell'universo.", author: "Gabriele D'Annunzio" },
    { text: "Nel tuo sguardo ho trovato l'infinito che cercavo.", author: "Gabriele D'Annunzio" },
    { text: "Amare te è come respirare: necessario, naturale, vitale.", author: "Gabriele D'Annunzio" },
    { text: "La tua voce è la musica che il mio cuore aspettava da sempre.", author: "Gabriele D'Annunzio" },
    { text: "In ogni tua carezza trovo il senso dell'eternità.", author: "Gabriele D'Annunzio" },
    { text: "Sei la poesia che la mia anima ha sempre desiderato scrivere.", author: "Gabriele D'Annunzio" },
    { text: "L'amore per te è il fuoco che brucia senza consumarsi.", author: "Gabriele D'Annunzio" },
    
    // Giacomo Leopardi
    { text: "L'infinito del tuo amore supera ogni limite del pensiero.", author: "Giacomo Leopardi" },
    { text: "Nel silenzio della notte, il tuo nome è la mia preghiera.", author: "Giacomo Leopardi" },
    { text: "Amarti è trovare bellezza anche nel dolore.", author: "Giacomo Leopardi" },
    { text: "La tua presenza rende infinito ogni istante.", author: "Giacomo Leopardi" },
    { text: "Nel tuo sorriso scorgo l'unica vera felicità.", author: "Giacomo Leopardi" },
    { text: "L'amore per te è l'unica certezza in un mondo di illusioni.", author: "Giacomo Leopardi" },
    { text: "Sei l'unica stella che illumina la mia notte oscura.", author: "Giacomo Leopardi" },
    { text: "Amarti è come contemplare l'infinito del mare.", author: "Giacomo Leopardi" },
    
    // Giovanni Pascoli
    { text: "Nel tuo sguardo trovo la dolcezza di mille primavere.", author: "Giovanni Pascoli" },
    { text: "L'amore per te è come il canto dell'allodola all'alba.", author: "Giovanni Pascoli" },
    { text: "Sei il rifugio dolce dove il mio cuore trova pace.", author: "Giovanni Pascoli" },
    { text: "La tua voce è il suono più dolce che abbia mai udito.", author: "Giovanni Pascoli" },
    { text: "Amarti è come tornare a casa dopo un lungo viaggio.", author: "Giovanni Pascoli" },
    { text: "Nel tuo abbraccio trovo il calore del focolare domestico.", author: "Giovanni Pascoli" },
    { text: "Sei la luce che illumina i sentieri oscuri della vita.", author: "Giovanni Pascoli" },
    { text: "L'amore per te cresce come il grano nei campi dorati.", author: "Giovanni Pascoli" },
    
    // Giuseppe Ungaretti
    { text: "Ti amo come si ama un'isola in mezzo al mare.", author: "Giuseppe Ungaretti" },
    { text: "Nel tuo nome trovo la parola più breve e più dolce.", author: "Giuseppe Ungaretti" },
    { text: "L'amore per te è un fiume che scorre nell'eternità.", author: "Giuseppe Ungaretti" },
    { text: "Sei il mattino che rischiara ogni mia notte.", author: "Giuseppe Ungaretti" },
    { text: "Amarti è trovare senso nel caos del mondo.", author: "Giuseppe Ungaretti" },
    { text: "La tua assenza è un abisso che niente può colmare.", author: "Giuseppe Ungaretti" },
    { text: "Nel tuo sguardo leggo la storia di tutti gli amori.", author: "Giuseppe Ungaretti" },
    { text: "Sei l'unica verità in un mondo di parole vuote.", author: "Giuseppe Ungaretti" },
    
    // Eugenio Montale
    { text: "La tua bellezza è la sola cosa che resiste al tempo.", author: "Eugenio Montale" },
    { text: "Nel tuo silenzio sento la voce più vera.", author: "Eugenio Montale" },
    { text: "Amarti è come scoprire un angolo di mondo inedito.", author: "Eugenio Montale" },
    { text: "Sei la mosca d'oro che illumina la mia stanza.", author: "Eugenio Montale" },
    { text: "L'amore per te è un limpido ruscello tra le rocce.", author: "Eugenio Montale" },
    { text: "Nel tuo sorriso trovo la forza di ogni mattina.", author: "Eugenio Montale" },
    { text: "Sei l'unica certezza nel mio mare di dubbi.", author: "Eugenio Montale" },
    { text: "Amarti è come trovare un tesoro nascosto.", author: "Eugenio Montale" },
    
    // Aleardo Aleardi
    { text: "Nel tuo sguardo trovo la patria che il cuore desidera.", author: "Aleardo Aleardi" },
    { text: "L'amore per te è più forte di ogni confine.", author: "Aleardo Aleardi" },
    { text: "Sei la libertà che il mio spirito cerca da sempre.", author: "Aleardo Aleardi" },
    { text: "Amarti è come cantare l'inno più bello.", author: "Aleardo Aleardi" },
    { text: "La tua voce è la musica della mia anima.", author: "Aleardo Aleardi" },
    { text: "Nel tuo abbraccio trovo la pace del ritorno.", author: "Aleardo Aleardi" },
    { text: "Sei il sogno che la realtà non può svanire.", author: "Aleardo Aleardi" },
    { text: "L'amore per te è la bandiera del mio cuore.", author: "Aleardo Aleardi" },
    
    // Giosuè Carducci
    { text: "Nel tuo sguardo trovo la luce del sole antico.", author: "Giosuè Carducci" },
    { text: "L'amore per te è come un inno alla gioia.", author: "Giosuè Carducci" },
    { text: "Sei la bellezza classica che non tramonta mai.", author: "Giosuè Carducci" },
    { text: "Amarti è come camminare in un bosco sacro.", author: "Giosuè Carducci" },
    { text: "La tua presenza è la musa che ispira i miei versi.", author: "Giosuè Carducci" },
    { text: "Nel tuo sorriso vedo l'alba di nuovi giorni.", author: "Giosuè Carducci" },
    { text: "Sei l'armonia perfetta di ogni mia poesia.", author: "Giosuè Carducci" },
    { text: "L'amore per te è la forza che muove il mondo.", author: "Giosuè Carducci" },
    
    // Ugo Foscolo
    { text: "Nel tuo nome trovo l'unico monumento che merita di esistere.", author: "Ugo Foscolo" },
    { text: "L'amore per te è più eterno di ogni sepolcro.", author: "Ugo Foscolo" },
    { text: "Sei l'unica tomba che il tempo non può profanare.", author: "Ugo Foscolo" },
    { text: "Amarti è come scrivere con il fuoco sull'eternità.", author: "Ugo Foscolo" },
    { text: "La tua bellezza è l'unica immortalità possibile.", author: "Ugo Foscolo" },
    { text: "Nel tuo sguardo trovo la patria perduta.", author: "Ugo Foscolo" },
    { text: "Sei l'unica memoria che vale la pena conservare.", author: "Ugo Foscolo" },
    { text: "L'amore per te è la mia ultima e sola poesia.", author: "Ugo Foscolo" },
    
    // Francesco Petrarca
    { text: "Nel tuo sguardo trovo la luce che guida i miei passi.", author: "Francesco Petrarca" },
    { text: "L'amore per te è la sola religione del mio cuore.", author: "Francesco Petrarca" },
    { text: "Sei la Laura che dà senso a ogni mio verso.", author: "Francesco Petrarca" },
    { text: "Amarti è come contemplare la perfezione divina.", author: "Francesco Petrarca" },
    { text: "La tua bellezza è il riflesso del paradiso in terra.", author: "Francesco Petrarca" },
    { text: "Nel tuo nome trovo la rima più dolce.", author: "Francesco Petrarca" },
    { text: "Sei l'unica musa che il mio cuore celebra.", author: "Francesco Petrarca" },
    { text: "L'amore per te è la scala verso l'infinito.", author: "Francesco Petrarca" },
    
    // Dante Alighieri
    { text: "Nel tuo sguardo trovo la stella che guida l'amante.", author: "Dante Alighieri" },
    { text: "L'amore per te muove il sole e l'altre stelle.", author: "Dante Alighieri" },
    { text: "Sei la Beatrice che conduce alla felicità.", author: "Dante Alighieri" },
    { text: "Amarti è come ascendere verso i cieli più alti.", author: "Dante Alighieri" },
    { text: "La tua bellezza è riflessa nei cerchi del paradiso.", author: "Dante Alighieri" },
    { text: "Nel tuo nome trovo la rima perfetta di ogni canto.", author: "Dante Alighieri" },
    { text: "Sei l'amore che non conosce tempo né spazio.", author: "Dante Alighieri" },
    { text: "L'amore per te è la divina commedia del mio cuore.", author: "Dante Alighieri" },
    
    // Giovanni Boccaccio
    { text: "Nel tuo sorriso trovo la gioia di mille novelle.", author: "Giovanni Boccaccio" },
    { text: "L'amore per te è la più bella storia mai raccontata.", author: "Giovanni Boccaccio" },
    { text: "Sei l'eroina di ogni romanzo che sogno.", author: "Giovanni Boccaccio" },
    { text: "Amarti è come vivere in un giardino di delizie.", author: "Giovanni Boccaccio" },
    { text: "La tua presenza rende ogni giorno una festa.", author: "Giovanni Boccaccio" },
    { text: "Nel tuo abbraccio trovo il rifugio dalle tempeste.", author: "Giovanni Boccaccio" },
    { text: "Sei la finestra che si apre su mondi nuovi.", author: "Giovanni Boccaccio" },
    { text: "L'amore per te è il tema di ogni mia novella.", author: "Giovanni Boccaccio" },
    
    // Alessandro Manzoni
    { text: "Nel tuo sguardo trovo la purezza dell'anima buona.", author: "Alessandro Manzoni" },
    { text: "L'amore per te è la forza che vince ogni ingiustizia.", author: "Alessandro Manzoni" },
    { text: "Sei la Lucia che illumina il mio cammino oscuro.", author: "Alessandro Manzoni" },
    { text: "Amarti è come trovare pace dopo lunga tempesta.", author: "Alessandro Manzoni" },
    { text: "La tua bontà è il rifugio del mio cuore afflitto.", author: "Alessandro Manzoni" },
    { text: "Nel tuo nome trovo la preghiera più sincera.", author: "Alessandro Manzoni" },
    { text: "Sei l'unica certezza in un mondo di cambiamenti.", author: "Alessandro Manzoni" },
    { text: "L'amore per te è la promessa di un domani migliore.", author: "Alessandro Manzoni" },
    
    // William Shakespeare
    { text: "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.", author: "William Shakespeare" },
    { text: "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind.", author: "William Shakespeare" },
    { text: "Doubt thou the stars are fire; Doubt that the sun doth move; Doubt truth to be a liar; But never doubt I love.", author: "William Shakespeare" },
    { text: "My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have.", author: "William Shakespeare" },
    { text: "I love thee with a love that shall not die, till the sun grows cold and the stars grow old.", author: "William Shakespeare" },
    { text: "When I saw you I fell in love, and you smiled because you knew.", author: "William Shakespeare" },
    { text: "Love is a smoke raised with the fume of sighs.", author: "William Shakespeare" },
    { text: "The course of true love never did run smooth.", author: "William Shakespeare" },
    
    // Pablo Neruda
    { text: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride.", author: "Pablo Neruda" },
    { text: "I love you in this way because I do not know any other way of loving but this.", author: "Pablo Neruda" },
    { text: "You are like nobody since I love you.", author: "Pablo Neruda" },
    { text: "In one kiss, you'll know all I haven't said.", author: "Pablo Neruda" },
    { text: "I want to do with you what spring does with the cherry trees.", author: "Pablo Neruda" },
    { text: "Love is so short, forgetting is so long.", author: "Pablo Neruda" },
    { text: "Tonight I can write the saddest lines. I loved her, and sometimes she loved me too.", author: "Pablo Neruda" },
    { text: "Your wide eyes are the only light I know from the extinguished constellations.", author: "Pablo Neruda" },
    
    // Federico García Lorca
    { text: "To see you naked is to remember the earth.", author: "Federico García Lorca" },
    { text: "I will always be your lover, even if you forget me.", author: "Federico García Lorca" },
    { text: "The moon is a sow and the night is full of mud.", author: "Federico García Lorca" },
    { text: "Green, how I want you green. Green wind. Green branches.", author: "Federico García Lorca" },
    { text: "I love you for your waist of gold, for your eyes of cold silver.", author: "Federico García Lorca" },
    { text: "The night is like a long road where love walks naked.", author: "Federico García Lorca" },
    { text: "Your body is a sea of silence where my soul drowns.", author: "Federico García Lorca" },
    { text: "Love is the most beautiful madness of the soul.", author: "Federico García Lorca" },
    
    // Arthur Rimbaud
    { text: "I have kissed your mouth, my love, and the taste of your lips is the taste of eternity.", author: "Arthur Rimbaud" },
    { text: "Love must be reinvented, that's certain.", author: "Arthur Rimbaud" },
    { text: "I found the key to love in your eyes.", author: "Arthur Rimbaud" },
    { text: "Your beauty is a star that guides my wandering soul.", author: "Arthur Rimbaud" },
    { text: "In your arms I found the harbor of my dreams.", author: "Arthur Rimbaud" },
    { text: "Love is a burning ship that sails toward the unknown.", author: "Arthur Rimbaud" },
    { text: "Your voice is the music that my heart has always sought.", author: "Arthur Rimbaud" },
    { text: "I have loved you like one loves the dawn.", author: "Arthur Rimbaud" },
    
    // Charles Baudelaire
    { text: "You are the most beautiful, the most sweet of all creatures.", author: "Charles Baudelaire" },
    { text: "I love you as the desert loves the rain, as the night loves the stars.", author: "Charles Baudelaire" },
    { text: "Your eyes are two deep wells where I lose myself forever.", author: "Charles Baudelaire" },
    { text: "Love is the greatest pleasure of the soul.", author: "Charles Baudelaire" },
    { text: "You are my drug, my poison, my salvation.", author: "Charles Baudelaire" },
    { text: "In your beauty I find the sublime and the terrible.", author: "Charles Baudelaire" },
    { text: "Your voice is the only music that soothes my tormented soul.", author: "Charles Baudelaire" },
    { text: "I love you with a love that is deeper than the abyss.", author: "Charles Baudelaire" },
    
    // Johann Wolfgang von Goethe
    { text: "I love you, and that is the beginning and end of everything.", author: "Johann Wolfgang von Goethe" },
    { text: "We are shaped and fashioned by what we love.", author: "Johann Wolfgang von Goethe" },
    { text: "Love does not dominate; it cultivates.", author: "Johann Wolfgang von Goethe" },
    { text: "In your eyes I see the reflection of my soul.", author: "Johann Wolfgang von Goethe" },
    { text: "To love is to receive a glimpse of heaven.", author: "Johann Wolfgang von Goethe" },
    { text: "Your presence is the sunshine that warms my heart.", author: "Johann Wolfgang von Goethe" },
    { text: "Love is the master key that opens the gates of happiness.", author: "Johann Wolfgang von Goethe" },
    { text: "I have loved you for a thousand years and will love you for a thousand more.", author: "Johann Wolfgang von Goethe" },
    
    // Fernando Pessoa
    { text: "To love is to tire of being alone; it is therefore a cowardice, a surrender of self.", author: "Fernando Pessoa" },
    { text: "Love is a company. I cannot love alone.", author: "Fernando Pessoa" },
    { text: "Your absence is a presence that fills my soul.", author: "Fernando Pessoa" },
    { text: "I love you because I do not know how not to love you.", author: "Fernando Pessoa" },
    { text: "In the mirror of your eyes I see the truth of myself.", author: "Fernando Pessoa" },
    { text: "Love is the only reality that justifies existence.", author: "Fernando Pessoa" },
    { text: "Your name is the word that my heart repeats endlessly.", author: "Fernando Pessoa" },
    { text: "I have loved you in all the lives I never lived.", author: "Fernando Pessoa" },
    
    // Rainer Maria Rilke
    { text: "I hold you in my heart like a prayer.", author: "Rainer Maria Rilke" },
    { text: "Love consists in this, that two solitudes protect and touch and greet each other.", author: "Rainer Maria Rilke" },
    { text: "I love you, and I am at your side, and I belong to you.", author: "Rainer Maria Rilke" },
    { text: "Your beauty is a quiet light that illuminates my darkness.", author: "Rainer Maria Rilke" },
    { text: "Love is the difficult task of becoming oneself through another.", author: "Rainer Maria Rilke" },
    { text: "In your silence I hear the music of the spheres.", author: "Rainer Maria Rilke" },
    { text: "I love you more than my own solitude.", author: "Rainer Maria Rilke" },
    { text: "Your presence is the only home my heart has ever known.", author: "Rainer Maria Rilke" },
    
    // Rabindranath Tagore
    { text: "I seem to have loved you in numberless forms, numberless times, in life after life, in age after age forever.", author: "Rabindranath Tagore" },
    { text: "Love is when the soul starts to sing and the flowers of your life bloom on their own.", author: "Rabindranath Tagore" },
    { text: "You are the light of my life, the music of my soul.", author: "Rabindranath Tagore" },
    { text: "I have spent many days stringing and unstringing my instrument while the song I came to sing remains unsung.", author: "Rabindranath Tagore" },
    { text: "Love is an endless mystery, for it has nothing else to explain it.", author: "Rabindranath Tagore" },
    { text: "Your touch is the only blessing my heart desires.", author: "Rabindranath Tagore" },
    { text: "In your eyes I see the reflection of the infinite.", author: "Rabindranath Tagore" },
    { text: "I love you not because of who you are, but because of who I am when I am with you.", author: "Rabindranath Tagore" },
    
    // Sylvia Plath
    { text: "I desire the things which will destroy me in the end.", author: "Sylvia Plath" },
    { text: "I love you to the point of devastation.", author: "Sylvia Plath" },
    { text: "Your absence is a wound that never heals.", author: "Sylvia Plath" },
    { text: "I love you like a drowning man loves air.", author: "Sylvia Plath" },
    { text: "In your arms I find both heaven and hell.", author: "Sylvia Plath" },
    { text: "Love is the only thing that makes the darkness bearable.", author: "Sylvia Plath" },
    { text: "Your voice is the only sound that calms my storm.", author: "Sylvia Plath" },
    { text: "I have loved you with a love that consumes.", author: "Sylvia Plath" },
    
    // Edgar Allan Poe
    { text: "We loved with a love that was more than love.", author: "Edgar Allan Poe" },
    { text: "I was never really insane except upon occasions when my heart was touched.", author: "Edgar Allan Poe" },
    { text: "Your beauty is the only light in my darkness.", author: "Edgar Allan Poe" },
    { text: "Love is the most terrible and beautiful of all things.", author: "Edgar Allan Poe" },
    { text: "In your eyes I see the reflection of my tortured soul.", author: "Edgar Allan Poe" },
    { text: "I have loved you with an intensity that borders on madness.", author: "Edgar Allan Poe" },
    { text: "Your presence is the only thing that keeps the shadows at bay.", author: "Edgar Allan Poe" },
    { text: "Love is the ghost that haunts my every waking moment.", author: "Edgar Allan Poe" },
    
    // Oscar Wilde
    { text: "You are my heart, my life, my one and only thought.", author: "Oscar Wilde" },
    { text: "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.", author: "Oscar Wilde" },
    { text: "Who, being loved, is poor?", author: "Oscar Wilde" },
    { text: "I have found the one whom my soul loves.", author: "Oscar Wilde" },
    { text: "To love oneself is the beginning of a lifelong romance.", author: "Oscar Wilde" },
    { text: "Your beauty is a work of art that takes my breath away.", author: "Oscar Wilde" },
    { text: "I can resist everything except temptation, and you are my greatest temptation.", author: "Oscar Wilde" },
    { text: "Love is the only thing that makes life worth living.", author: "Oscar Wilde" },
    
    // Umberto Saba
    { text: "I have loved you like one loves a beautiful day in May.", author: "Umberto Saba" },
    { text: "Your presence is the peace that my heart has always sought.", author: "Umberto Saba" },
    { text: "Love is the only thing that makes sense of this world.", author: "Umberto Saba" },
    { text: "In your eyes I see the truth of all things.", author: "Umberto Saba" },
    { text: "I love you with a love that is quiet and deep.", author: "Umberto Saba" },
    { text: "Your voice is the sound of home.", author: "Umberto Saba" },
    { text: "Love is the thread that binds all my days together.", author: "Umberto Saba" },
    { text: "In your arms I find the harbor I have always sought.", author: "Umberto Saba" },
    
    // Sandro Penna
    { text: "I love you with a love that is both joy and pain.", author: "Sandro Penna" },
    { text: "Your beauty is a knife that cuts through my heart.", author: "Sandro Penna" },
    { text: "In your eyes I see both heaven and hell.", author: "Sandro Penna" },
    { text: "Love is the sweetest agony I have ever known.", author: "Sandro Penna" },
    { text: "Your touch is both fire and water to my soul.", author: "Sandro Penna" },
    { text: "I have loved you in secret, in silence, in shadow.", author: "Sandro Penna" },
    { text: "Love is the only truth in a world of lies.", author: "Sandro Penna" },
    { text: "Your absence is a wound that bleeds forever.", author: "Sandro Penna" },
    
    // Carlo Betocchi
    { text: "I love you with a love that is simple and true.", author: "Carlo Betocchi" },
    { text: "Your presence is the blessing of every morning.", author: "Carlo Betocchi" },
    { text: "In your smile I see the face of God.", author: "Carlo Betocchi" },
    { text: "Love is the light that guides me home.", author: "Carlo Betocchi" },
    { text: "Your voice is the prayer of my heart.", author: "Carlo Betocchi" },
    { text: "I have loved you since the beginning of time.", author: "Carlo Betocchi" },
    { text: "Love is the miracle that makes life worth living.", author: "Carlo Betocchi" },
    { text: "In your arms I find my true home.", author: "Carlo Betocchi" },
    
    // Sándor Márai
    { text: "I loved you so much that I forgot to live.", author: "Sándor Márai" },
    { text: "Your memory is the only thing I have left.", author: "Sándor Márai" },
    { text: "Love is the only thing that survives death.", author: "Sándor Márai" },
    { text: "In your absence I have learned the true meaning of loneliness.", author: "Sándor Márai" },
    { text: "I have loved you with a love that consumes everything.", author: "Sándor Márai" },
    { text: "Your voice is the echo of my heart.", author: "Sándor Márai" },
    { text: "Love is the fire that burns without consuming.", author: "Sándor Márai" },
    { text: "In your eyes I saw the reflection of my soul.", author: "Sándor Márai" },
    
    // Paul Celan
    { text: "I love you with a love that is deeper than death.", author: "Paul Celan" },
    { text: "Your name is the word that keeps me alive.", author: "Paul Celan" },
    { text: "In your silence I hear the music of the universe.", author: "Paul Celan" },
    { text: "Love is the only bridge across the abyss.", author: "Paul Celan" },
    { text: "Your presence is the light in my darkness.", author: "Paul Celan" },
    { text: "I have loved you through fire and through ice.", author: "Paul Celan" },
    { text: "Love is the only language that needs no words.", author: "Paul Celan" },
    { text: "In your eyes I see the hope of all things.", author: "Paul Celan" },
    
    // Anna Achmatova
    { text: "I loved you: and perhaps this love has not yet died out in my heart.", author: "Anna Achmatova" },
    { text: "Your memory is the only thing that keeps me warm.", author: "Anna Achmatova" },
    { text: "Love is the only thing that makes the pain bearable.", author: "Anna Achmatova" },
    { text: "In your absence I have learned to love silence.", author: "Anna Achmatova" },
    { text: "I have loved you with a love that defies time.", author: "Anna Achmatova" },
    { text: "Your voice is the only music I need.", author: "Anna Achmatova" },
    { text: "Love is the only truth in a world of shadows.", author: "Anna Achmatova" },
    { text: "In your eyes I saw the reflection of my dreams.", author: "Anna Achmatova" },
    
    // Marina Cvetaeva
    { text: "I love you with a love that is both madness and sanity.", author: "Marina Cvetaeva" },
    { text: "Your absence is a wound that never heals.", author: "Marina Cvetaeva" },
    { text: "Love is the only thing that makes life possible.", author: "Marina Cvetaeva" },
    { text: "In your arms I find both heaven and earth.", author: "Marina Cvetaeva" },
    { text: "I have loved you with a love that transcends death.", author: "Marina Cvetaeva" },
    { text: "Your voice is the only sound that matters.", author: "Marina Cvetaeva" },
    { text: "Love is the fire that burns in my soul.", author: "Marina Cvetaeva" },
    { text: "In your eyes I see the truth of the universe.", author: "Marina Cvetaeva" },
    
    // Osip Mandel'štam
    { text: "I love you with a love that is stronger than stone.", author: "Osip Mandel'štam" },
    { text: "Your memory is the foundation of my world.", author: "Osip Mandel'štam" },
    { text: "Love is the only thing that survives the centuries.", author: "Osip Mandel'štam" },
    { text: "In your silence I hear the voice of eternity.", author: "Osip Mandel'štam" },
    { text: "I have loved you with a love that defies tyranny.", author: "Osip Mandel'štam" },
    { text: "Your presence is the light in my darkness.", author: "Osip Mandel'štam" },
    { text: "Love is the only freedom that cannot be taken away.", author: "Osip Mandel'štam" },
    { text: "In your eyes I see the hope of humanity.", author: "Osip Mandel'štam" },
    
    // César Vallejo
    { text: "I love you with a love that is both joy and sorrow.", author: "César Vallejo" },
    { text: "Your absence is a void that nothing can fill.", author: "César Vallejo" },
    { text: "Love is the only thing that makes sense of suffering.", author: "César Vallejo" },
    { text: "In your arms I find the peace I have always sought.", author: "César Vallejo" },
    { text: "I have loved you with a love that transcends pain.", author: "César Vallejo" },
    { text: "Your voice is the only comfort in my despair.", author: "César Vallejo" },
    { text: "Love is the only thing that makes death bearable.", author: "César Vallejo" },
    { text: "In your eyes I see the beauty of the world.", author: "César Vallejo" },
    
    // Juan Ramón Jiménez
    { text: "I love you with a love that is pure and simple.", author: "Juan Ramón Jiménez" },
    { text: "Your presence is the poetry of my life.", author: "Juan Ramón Jiménez" },
    { text: "Love is the only thing that makes life beautiful.", author: "Juan Ramón Jiménez" },
    { text: "In your smile I see the face of the divine.", author: "Juan Ramón Jiménez" },
    { text: "I have loved you with a love that is eternal.", author: "Juan Ramón Jiménez" },
    { text: "Your voice is the music of my soul.", author: "Juan Ramón Jiménez" },
    { text: "Love is the only thing that matters in the end.", author: "Juan Ramón Jiménez" },
    { text: "In your eyes I see the truth of love.", author: "Juan Ramón Jiménez" },
];

// ========== VARIABILI GLOBALI ==========
let currentAuthor = null;

// ========== FUNZIONI ==========
function getQuotesByAuthor(authorName) {
    return quotes.filter(q => q.author === authorName);
}

function getRandomQuoteByAuthor(authorName) {
    const authorQuotes = getQuotesByAuthor(authorName);
    if (authorQuotes.length === 0) return null;
    return authorQuotes[Math.floor(Math.random() * authorQuotes.length)];
}

function getAuthorsByCategory(category) {
    if (category === 'all') return authors;
    return authors.filter(a => a.category === category);
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 2 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

function renderAuthors(category = 'all') {
    const grid = document.getElementById('authorsGrid');
    grid.innerHTML = '';
    const filtered = getAuthorsByCategory(category);
    
    filtered.forEach(author => {
        const card = document.createElement('div');
        card.className = 'author-card';
        card.onclick = () => openModal(author.name);
        
        const badgeClass = 'badge-' + author.category;
        const badgeText = author.category === 'italian' ? 'Italiano' : author.category === 'famous' ? 'Famoso' : 'Di Nicchia';
        
        card.innerHTML = `
            <div class="card-header">
                <span class="category-badge ${badgeClass}">${badgeText}</span>
                <div class="sparkle-icon">✦</div>
            </div>
            <h3 class="author-name">${author.name}</h3>
            <p class="author-nation">${author.nationality}</p>
            <p class="author-bio">${author.bio || ''}</p>
        `;
        grid.appendChild(card);
    });
}

function openModal(authorName) {
    currentAuthor = authorName;
    showQuote();
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

function showQuote() {
    const quote = getRandomQuoteByAuthor(currentAuthor);
    if (quote) {
        document.getElementById('quoteText').textContent = '"' + quote.text + '"';
        document.getElementById('quoteAuthor').textContent = '— ' + quote.author;
    }
}

function refreshQuote() {
    const btn = document.getElementById('refreshBtn');
    btn.classList.add('spinning');
    setTimeout(() => {
        showQuote();
        btn.classList.remove('spinning');
    }, 300);
}

function scrollToAuthors() {
    document.getElementById('authors').scrollIntoView({ behavior: 'smooth' });
}

// ========== INIZIALIZZAZIONE ==========
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    renderAuthors();
    
    // Filtri
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderAuthors(btn.dataset.filter);
        });
    });
    
    // Chiudi modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Chiudi modal cliccando fuori
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') closeModal();
    });
});
