/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

    /**
     * 
     */
    var demoContent = [
        {
            demo_link: 'https://elopezgon.github.io/2016/06/06/Depresion-en-Mexico/',
            img_link: 'https://elopezgon.github.io/images-post/depresion_ent.jpg',
            code_link: 'https://elopezgon.github.io/2016/06/06/Depresion-en-Mexico',
            title: 'Depresión en México',
            core_tech: 'R',
            description: 'La depresión mayor es un trastorno de alta prevalencia que puede generar discapacidad importante en quien la padece.'
        },{
        demo_link: 'https://elopezgon.github.io/2016/06/06/Depresion-en-Mexico/',
        img_link: 'https://elopezgon.github.io/images-post/sexualidad_ent.jpg',
        code_link: 'https://elopezgon.github.io/2016/06/06/Depresion-en-Mexico/',
        title: 'Sexualidad: Generación X vs Millennials',
        core_tech: 'R',
        description: ''
    },  {
        demo_link: 'https://elopezgon.github.io/2016/09/13/areas-verdes/',
        img_link: 'https://elopezgon.github.io/images-post/areas_ent.jpg',
        code_link: 'https://elopezgon.github.io/2016/09/13/areas-verdes/',
        title: 'Áreas verdes urbanas',
        core_tech: 'R',
        description: ''
    }, {
        demo_link: 'https://elopezgon.github.io/2016/09/13/Familia-Mexicana/',
        img_link: 'https://elopezgon.github.io/images-post/familia_ent.jpg',
        code_link: 'https://elopezgon.github.io/2016/09/13/Familia-Mexicana/',
        title: 'Retrato de la Familia Mexicana',
        core_tech: 'R',
        description: ''
    }, {
        demo_link: 'https://elopezgon.github.io/2016/10/21/marihuana/',
        img_link: 'https://elopezgon.github.io/images-post/marihuana_ent.jpg',
        code_link: 'https://elopezgon.github.io/2016/10/21/marihuana/',
        title: 'Marihuana: Afectación, intolerancia y violencia',
        core_tech: 'R',
        description: ''
    }, {
        demo_link: 'https://elopezgon.github.io/2016/10/21/marihuana_mexico/',
        img_link: 'https://elopezgon.github.io/images-post/marihuana_mexico_ent.png',
        code_link: 'https://elopezgon.github.io/2016/10/21/marihuana_mexico/',
        title: 'Todo lo que siempre quiso saber sobre la marihuana en México y nunca se atrevió a preguntar',
        core_tech: 'R',
        description: ''
    }];

    contentInit(demoContent) 
    waitImgsLoad() 
}());



/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
    // var htmlArr = [];
    // for (var i = 0; i < content.length; i++) {
    //     htmlArr.push('<div class="grid-item">')
    //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
    //     htmlArr.push('<img src="'+content[i].img_link+'">')
    //     htmlArr.push('</a>')
    //     htmlArr.push('<h3 class="demo-title">')
    //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
    //     htmlArr.push('</h3>')
    //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
    //     htmlArr.push('<p>'+content[i].description)
    //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
    //     htmlArr.push('</p>')
    //     htmlArr.push('</div>')
    // }
    // var htmlStr = htmlArr.join('')
    var htmlStr = ''
    for (var i = 0; i < content.length; i++) {
        htmlStr +=
            '<div class="grid-item">' +
            '   <a class="a-img" href="' + content[i].demo_link + '">' +
            '       <img src="' + content[i].img_link + '">' +
            '   </a>' +
            '   <h3 class="demo-title">' +
            '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' +
            '   </h3>' +
            '   <p>' + content[i].core_tech + '</p>' +
            '   <p>' + content[i].description +
            '       <a href="' + content[i].code_link + '"> <i class="fa fa-code" aria-hidden="true"></i></a>' +
            '   </p>' +
            '</div>'
    }
    var grid = document.querySelector('.grid')
    grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
    var imgs = document.querySelectorAll('.grid img')
    var totalImgs = imgs.length
    var count = 0
        //console.log(imgs)
    for (var i = 0; i < totalImgs; i++) {
        if (imgs[i].complete) {
            //console.log('complete');
            count++
        } else {
            imgs[i].onload = function() {
                // alert('onload')
                count++
                //console.log('onload' + count)
                if (count == totalImgs) {
                    //console.log('onload---bbbbbbbb')
                    initGrid()
                }
            }
        }
    }
    if (count == totalImgs) {
        //console.log('---bbbbbbbb')
        initGrid()
    }
}

/**
 * 
 * @return {[type]} [description]
 */
function initGrid() {
    var msnry = new Masonry('.grid', {
        // options
        itemSelector: '.grid-item',
        columnWidth: 250,
        isFitWidth: true,
        gutter: 20,
    })
}


