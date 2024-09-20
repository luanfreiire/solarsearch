//Base de Dados JS//
//Dev.Luan Freire//

export const dados = [

    //Planetas//
    {
        titulo: "Planetas",
        descricao: "Planetas são corpos celestes massivos que orbitam uma estrela (no nosso caso, o Sol) e possuem gravidade suficiente para assumir uma\
         forma quase esférica. Eles limpam' a sua órbita de outros objetos menores, como asteroides e cometas.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIM-v7BPXpTRaeFAKImhSp4f8_g_1SPmNKA&s"
    },

    {
        titulo: "Mercúrio",
        descricao: "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres.\
         Sua proximidade com o Sol o torna um mundo extremo, com temperaturas que variam drasticamente entre o dia e a noite.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
    },

    {
        titulo: "Vênus",
        descricao: "Vênus é o segundo planeta mais próximo do Sol e, em tamanho e massa, é muito similar à Terra. Por essa razão, ele é frequentemente\
         chamado de 'irmão gêmeo' do nosso planeta. No entanto, as condições na superfície de Vênus são extremamente diferentes daquelas encontradas na Terra.",
        image: "https://midias.correiobraziliense.com.br/_midias/jpg/2023/03/13/675x450/1_jupiter-27609698.jpg?20230313200413?20230313200413"
    },

    {
        titulo: "Terra",
        descricao: "A Terra é o terceiro planeta mais próximo do Sol e o único que se sabe abrigar vida. É um mundo vibrante e dinâmico, com uma rica\
         variedade de paisagens, climas e formas de vida. É um planeta rochoso, com uma superfície sólida e ativa, e está coberto por oceanos, \
         que lhe conferem a característica de ser conhecido como 'Planeta Azul'.",
        image: "https://segredosdomundo.r7.com/wp-content/uploads/2020/01/planeta-terra-conheca-tudo-sobre-o-nosso-planeta-natal.jpg"
    },

    {
        titulo: "Marte",
        descricao: "Marte, o quarto planeta a partir do Sol, é frequentemente chamado de 'Planeta Vermelho' devido à sua coloração característica causada\
         pela presença de óxido de ferro em sua superfície. Apesar de ser um mundo árido e frio, Marte tem sido objeto de intenso estudo e fascinação\
         por séculos, devido à possibilidade de ter abrigado vida no passado e, talvez, até mesmo no presente.",
        image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/8465a67d00eda6b73b4485921e5fac7a.jpg"
    },

    {
        titulo: "Júpiter",
        descricao: "Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa. É um gigante gasoso, composto principalmente de hidrogênio\
         e hélio, e não possui uma superfície sólida como a Terra. Júpiter é o quinto planeta a partir do Sol e é visível a olho nu da Terra.",
        image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2024/01/planeta-jupiter.jpg"
    },

    {
        titulo: "Saturno",
        descricao: "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar, ficando atrás apenas de Júpiter.\
         É famoso por seus impressionantes anéis, compostos principalmente de gelo e partículas de rocha.",
        image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/0f0d865207019b9ec3e29ecc22be0e17.jpg"
    },

    {
        titulo: "Urano",
        descricao: "Urano é o sétimo planeta a partir do Sol e o terceiro maior do Sistema Solar. É um mundo bastante peculiar e diferente dos outros\
         gigantes gasosos, como Júpiter e Saturno. Ele é classificado como um gigante de gelo, junto com Netuno, devido à sua composição rica em gases \
         como hidrogênio e hélio, além de elementos mais pesados, como gelo de água, metano e amônia.",
        image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/04/planeta-urano.jpg"
    },

    {
        titulo: "Netuno",
        descricao: "Netuno é o oitavo e mais distante planeta do Sol em nosso Sistema Solar. É um gigante de gelo, composto principalmente de hidrogênio,\
         hélio, metano e traços de água e amônia. Sua distância do Sol faz com que seja um dos lugares mais frios do Sistema Solar.",
        image: "https://s4.static.brasilescola.uol.com.br/be/2022/08/1-planeta-netuno.jpg"
    },

    //Estrelas//
    {
        titulo: "Estrelas",
        descricao: "O Sistema Solar possui apenas uma estrela: o Sol. É comum pensar em 'estrelas' quando olhamos para o céu noturno e vemos aqueles \
         pontinhos luminosos. No entanto, esses pontos luminosos são, na maioria das vezes, outras estrelas, cada uma sendo o centro de seu próprio \
         sistema planetário.",
        image: "https://museuabertodeastronomia.com.br/wp-content/uploads/2019/10/galeria-estrelas28743.jpg"
    },

    {
        titulo: "Sol",
        descricao: "O Sol é a estrela mais próxima da Terra e a força motriz do nosso sistema solar. Sua intensa gravidade mantém todos os planetas, \
         asteroides, cometas e outros corpos celestes em suas órbitas. o Sol é a estrela central do nosso sistema solar e é fundamental para a existência \
         de vida na Terra. Sua energia, calor e luz moldam nosso planeta e influenciam todos os aspectos da vida.",
        image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/2-sol.jpg"
    },

    //Planetas Anões//
    {
        titulo: "Planetas Anões",
        descricao: "Planetas anões são corpos celestes que, embora compartilhem algumas características com os planetas, não se encaixam perfeitamente\
         nessa categoria. Essa classificação foi criada pela União Astronômica Internacional (UAI) em 2006, após a descoberta de diversos objetos\
         semelhantes a Plutão nos confins do Sistema Solar.",
        image: "https://realizeeducacao.com.br/wp-content/uploads/2021/08/sistema-solar-planetas-anoes.png"
    },

    {
        titulo: "Plutão",
        descricao: "Plutão, por muitos anos considerado o nono planeta do Sistema Solar, foi reclassificado como um planeta anão em 2006 pela\
         União Astronômica Internacional (IAU). Essa reclassificação gerou muita discussão, mas a decisão da IAU se baseou em uma nova definição de planeta.",
        image: "https://img.odcdn.com.br/wp-content/uploads/2023/01/curiosidades-plutao-e1713363168400.jpg"
    },

    {
        titulo: "Ceres",
        descricao: "Ceres é um corpo celeste fascinante localizado no cinturão de asteroides entre Marte e Júpiter. Inicialmente classificado\
         como um planeta, depois como um asteroide, e atualmente como um planeta anão, Ceres é o maior objeto no cinturão de asteroides.",
        image: "https://img.odcdn.com.br/wp-content/uploads/2022/09/ceres-planeta-exploracao.jpg"
    },

    {
        titulo: "Eris",
        descricao: "Éris é um planeta anão localizado nos confins do Sistema Solar, em uma região conhecida como disco disperso. Sua descoberta, em 2003,\
         foi um dos fatores que levou à reclassificação de Plutão como planeta anão.",
        image: "https://www.inovacaotecnologica.com.br/noticias/imagens/010175111027-eris.jpg"
    },

    {
        titulo: "Makemake",
        descricao: "Makemake é um planeta anão localizado no cinturão de Kuiper, uma região além da órbita de Netuno repleta de objetos gelados.\
         Descoberto em 2005, Makemake é o terceiro maior planeta anão conhecido, depois de Plutão e Éris.",
        image: "https://s1.static.brasilescola.uol.com.br/be/2021/02/makemake.jpg"
    },

    {
        titulo: "Haumea",
        descricao: "Haumea é um planeta anão localizado no cinturão de Kuiper, uma região além da órbita de Netuno repleta de objetos gelados.\
         Uma das características mais marcantes de Haumea é sua forma extremamente alongada, semelhante a um ovo ou uma bola de futebol americano.\
         Essa forma peculiar é resultado de sua rotação extremamente rápida, uma das mais rápidas de qualquer objeto de tamanho considerável em nosso\
         Sistema Solar.",
        image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2024/02/haumea-planeta-anao.jpg"
    },

    //Satélites Naturais//
    {
        titulo: "Satélites Naturais",
        descricao: "Satélites naturais, também conhecidos como luas, são corpos celestes que orbitam um planeta ou outro corpo maior no espaço.\
         Pense neles como pequenas 'luas' que acompanham um planeta em sua jornada ao redor do Sol.",
        image: "https://static.todamateria.com.br/upload/sa/te/satelites-naturais-og.jpg?class=ogImageWide"
    },

    {
        titulo: "Io",
        descricao: "Io é uma das luas mais fascinantes e ativas do Sistema Solar. É um dos quatro maiores satélites naturais de Júpiter,\
         conhecidos como Luas Galileanas, em homenagem a Galileu Galilei, que as descobriu.", //!//
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Io_highest_resolution_true_color.jpg/800px-Io_highest_resolution_true_color.jpg"
    },

    {
        titulo: "Europa",
        descricao: "Europa é uma das luas galileanas de Júpiter e um dos corpos celestes mais intrigantes do Sistema Solar. Coberta por uma espessa\
         camada de gelo, Europa esconde um oceano global de água líquida sob sua superfície, o que a torna um dos principais candidatos na busca por\
         vida extraterrestre em nosso sistema solar.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Europa-moon.jpg/250px-Europa-moon.jpg"
    },

    {
        titulo: "Ganimedes",
        descricao: "Ganimedes é o maior satélite natural do Sistema Solar e também o maior dos satélites de Júpiter. É um mundo fascinante e complexo,\
         com características geológicas únicas e um oceano subterrâneo que o torna um alvo promissor na busca por vida extraterrestre.",
        image: "https://s2.glbimg.com/xgq4Hv00oP6xGVJvom_rypq6CNc=/e.glbimg.com/og/ed/f/original/2018/08/08/moon_ganymede_by_noaa.jpg"
    },

    {
        titulo: "Calisto",
        descricao: "Calisto é a segunda maior lua de Júpiter e a terceira maior do Sistema Solar. Ao contrário de suas irmãs galileanas, Io e Europa,\
         Calisto é um mundo geologicamente morto, com uma superfície antiga e extremamente craterizada.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg"
    },

    {
        titulo: "Lua",
        descricao: "A Lua é o único satélite natural da Terra e nosso mais próximo vizinho celestial. Ela exerce uma influência significativa sobre nosso\
         planeta, causando as marés e estabilizando o eixo de rotação da Terra.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/280px-FullMoon2010.jpg"
    },

    {
        titulo: "Titã",
        descricao: "Titã é a maior lua de Saturno e o segundo maior satélite natural do Sistema Solar, perdendo apenas para Ganimedes de Júpiter.\
         É um corpo celeste fascinante e único, com características que o tornam um dos mais intrigantes objetos de estudo no sistema solar.",
        image: "https://img.odcdn.com.br/wp-content/uploads/2023/09/tita-.jpg"
    },

    {
        titulo: "Tritão",
        descricao: "Tritão é o maior satélite natural de Netuno e um dos corpos celestes mais intrigantes do Sistema Solar. Possui características únicas\
         que o diferenciam de outras luas, como sua órbita retrógrada e sua atividade geológica.",
        image: "https://t.ctcdn.com.br/mfeUmix2PpDqje5wct9FzCTflSw=/640x360/smart/i4017.jpeg"
    },

    {
        titulo: "Encélado",
        descricao: "Encélado é uma das luas de Saturno que tem fascinado os cientistas por suas características únicas. Apesar de ser relativamente pequena,\
         essa lua gelada esconde um oceano global de água líquida sob sua superfície, o que a torna um dos locais mais promissores para a busca por vida\
          extraterrestre em nosso Sistema Solar.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/PIA17202-SaturnMoon-Enceladus-ApproachingFlyby-20151028.jpg"
    },

    //Asteróides//
    {
        titulo: "Asteróides",
        descricao: "Asteroides são corpos celestes rochosos, de tamanhos variados, que orbitam o Sol. Imagine-os como 'pedras espaciais' que sobraram da\
         formação do Sistema Solar.",
        image: "https://services.meteored.com/img/article/inteligencia-artificial-encontra-mais-de-20-mil-asteroides-escondidos-no-sistema-solar-1714857889223_1280.png"
    },

    {
        titulo: "Vesta",
        descricao: "Vesta é o segundo maior asteroide do Sistema Solar e um dos objetos mais brilhantes do cinturão de asteroides, localizado entre as\
         órbitas de Marte e Júpiter. Sua superfície rochosa e brilhante o tornam um corpo celeste bastante peculiar e interessante para os astrônomos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Vesta_in_natural_color.jpg"
    },

    {
        titulo: "Pallas",
        descricao: "Pallas é o terceiro maior corpo no cinturão de asteroides, localizado entre Marte e Júpiter. Descoberto em 1802 por Heinrich Olbers,\
         foi inicialmente classificado como planeta, mas posteriormente reclassificado como asteroide.",
        image: "https://scx2.b-cdn.net/gfx/news/hires/2011/astronomerss.jpg"
    },

    {
        titulo: "Íris",
        descricao: "Íris é um grande asteroide localizado no cinturão principal, a região entre as órbitas de Marte e Júpiter. Descoberto em 1847,\
         Íris é um dos asteroides mais brilhantes e estudados dessa região.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Iris_asteroid_eso.jpg"
    },

    {
        titulo: "Eros",
        descricao: "Eros é um asteroide bastante especial, não apenas por suas características físicas, mas também por seu nome que evoca a mitologia grega.\
         Com o nome do deus do amor, Eros, este corpo celeste possui uma história e características únicas que o tornam um objeto fascinante\
         para os astrônomos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/433eros.jpg"
    },

    {
        titulo: "Apophis",
        descricao: "É um asteroide próximo à Terra que, quando descoberto em 2004, causou um certo pânico ao gerar estimativas de uma alta probabilidade\
         de colisão com nosso planeta em 2029. Felizmente, após mais observações e cálculos precisos, essa possibilidade foi praticamente descartada.",
        image: "https://dalilabalekjian.wordpress.com/wp-content/uploads/2019/08/35aa3-apepvsempire.jpg"
    },

    //Cometas//
    {
        titulo: "Cometas",
        descricao: "Cometas são pequenos corpos celestes compostos principalmente de gelo, poeira e gases congelados. Eles orbitam o Sol em órbitas muito\
         elípticas, o que significa que às vezes se aproximam muito do Sol e outras vezes se afastam para regiões muito distantes.",
        image: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic548814_0.jpg?w=1900&h=1368"
    },

    {
        titulo: "Halley",
        descricao: "O cometa Halley é um dos cometas mais famosos e estudados da história. Ele é conhecido por ser um cometa periódico, o que significa\
         que retorna aos nossos céus em intervalos regulares.",
        image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/03/um-cometa-brilhante-com-grandes-trilhas-de-poeira-e-gas-em-referencia-ao-cometa-halley.jpg"
    },

    {
        titulo: "Hale Bopp",
        descricao: "O cometa Hale-Bopp foi um dos eventos astronômicos mais espetaculares e observados do século XX. Descoberto em 1995,\
         este cometa gigante encantou observadores do mundo todo com seu brilho intenso e suas longas caudas.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Halebopp031197.jpg"
    },

    {
        titulo: "Shoemaker Levy 9",
        descricao: "O cometa Shoemaker-Levy 9 foi um evento astronômico marcante que ocorreu em 1994. Descoberto em 1993, esse cometa tinha uma\
         característica única: ele estava fragmentado em diversos pedaços, resultado da intensa força gravitacional de Júpiter, que o havia capturado\
         e despedaçado em passagens anteriores.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Shoemaker-Levy.gif"
    },

    {
        titulo: "Neowise",
        descricao: "O cometa NEOWISE foi um dos eventos astronômicos mais espetaculares dos últimos anos. Descoberto em março de 2020, este cometa\
         brilhou intensamente nos céus noturnos do hemisfério norte durante o verão daquele ano, proporcionando um espetáculo visual inesquecível\
         para observadores de todo o mundo.",
        image: "https://www.monolitonimbus.com.br/wp-content/uploads/2020/07/NeowiseStonehenge_Deval.jpg.webp"
    },
]
