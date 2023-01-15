function makeGallery(list){
	var container = document.getElementById('aero-gallery');
	var st = container.innerHTML;
	for(i in list)
	{
		if(list[i].indexOf(".jpg")>0||list[i].indexOf(".jpeg")>0||list[i].indexOf(".png")>0)
			st+='<div class="col m4 s12"><img class="responsive-img materialboxed" src="gallery/'+list[i]+'"></br></div>';
	}
	container.innerHTML=st;
}

/// assign here///
var list =['MG_0343.jpg', 'DSC_0045.jpg', 'MG_0229.jpg', 'DSC_0092.jpg', 'DSC_0016.jpg', 'IMG_2668.jpg', 'images_list.py', 'DSC_1375.jpg', 'DSC_1383.jpg', 'DSC_0049.jpg', 'DSC_0104.jpg', 'untitled-2.jpg', 'DSC_0112.jpg', 'MG_0352.jpg', 'DSC_1389.jpg', 'DSC_1360.jpg', 'MG_0266.jpg', 'MG_0296.jpg', 'DSC_0102.jpg', 'IMG-20180816-WA0004.jpg', 'DSC_1404.jpg', 'DSC_0054.jpg', 'DSC_1363.jpg', 'DSC_0095.jpg', 'IMG_2684.jpg', 'DSC_0063.jpg', 'MG_0301.jpg', 'MG_0322.jpg']


makeGallery(list)
