(function($,Drupal){$.fn.updateStarField=function(data){var item_selector="#collection-item-important-star-"+data+" svg";let parentParagraph=$(item_selector).parents('.article-item');if($(item_selector).hasClass('text-gold')){$(item_selector).addClass('text-gray-5 test').removeClass('text-gold');parentParagraph.removeClass('field-important-1').addClass('field-important-0');return;}
if($(item_selector).hasClass('text-gray-5')){$(item_selector).addClass('text-gold').removeClass('text-gray-5');parentParagraph.removeClass('field-important-0').addClass('field-important-1');return;}
Drupal.attachBehaviors();};$(window).on('load',function(){const fieldSolved=$(".colored-dropdown .field-item-field-solved"),learningBar=document.querySelector('.collection-learning-bar'),textSpan=document.querySelectorAll('.learning-bar-value');let oldValue='';let la=0;if(textSpan){if(textSpan[0]){oldValue=parseInt(textSpan[0].textContent)}}
let fieldSelectedClasses=$.map(fieldSolved,function(e){return $(e).find('option:selected').data('class');});if(learningBar)la=parseInt(window.getComputedStyle(learningBar).getPropertyValue('--learned-articles'));if(fieldSolved.length){fieldSolved.on('change',function(){const $this=$(this);const parentParagraph=$this.parents('.article-item'),selected=$this.children("option:selected"),selectedVal=selected.val(),index=fieldSolved.index(this);let paragraph_id=$this.attr('paragraph-id');$this.after(Drupal.theme.ajaxProgressThrobber());$.ajax({type:"POST",url:"/ajax/change_solved",data:{'paragraph_id':paragraph_id,'solved':selectedVal},dataType:'json',success:function(response){const new_solved_value=response.data.solved;parentParagraph.attr('class',function(i,c){return c.replace(/(^|\s)field-solved-\S+/g,' field-solved-'+new_solved_value);});if(selected.data('class')==='learned'){oldValue=oldValue+1;la=la+1;learningBar.style.setProperty('--learned-articles',`${la}`);fieldSelectedClasses[index]='learned';}
else if(la>=1&&fieldSelectedClasses[index]==='learned'){if(la===1)la=0.0001;else la=la-1;oldValue=oldValue-1;learningBar.style.setProperty('--learned-articles',`${la}`);fieldSelectedClasses[index]='else';}
textSpan[0].textContent=`${oldValue}`;textSpan[1].textContent=`${oldValue}`;}});$(document).ajaxStop(function(){$(".ajax-progress-throbber").remove();});});}});var $this,val,shown_articles;const filtersInputs=$('.filters-wrapper input');$('.node--type-collection input[id^="field-solved-"]').not('#field-solved-important').click(function(){$this=$(this);val=$this.val();shown_articles=$('.collection-separator').each(function(){const obj=$(this).nextUntil('.collection-separator');let values=Object.values(obj);let i=0;for(const value of values){const list=value.classList;if(typeof list!=='undefined'&&list.contains("hidden")){i=i+1;}}
if(obj.length==i){$(this).addClass('hidden');}
else{$(this).removeClass('hidden');}});$.ajax({type:"POST",url:"/ajax/leifi_user_collections_manage_session",data:{'solved_status':$this.prop('checked'),'solved_status_value':val,'current_path':window.location.pathname},dataType:'json',success:function(response){},});});$(document).on('click','.node--type-collection .favorite-filter-wrapper .fa-star',function(){$('.node--type-collection .favorite-filter-wrapper .input-favorite').trigger('click');});$('.node--type-collection .favorite-filter-wrapper .input-favorite').click(function(){$.ajax({type:"POST",url:"/ajax/leifi_user_collections_manage_session",data:{'favorite_status':$this.prop('checked'),'current_path':window.location.pathname},dataType:'json',success:function(response){},});});})(jQuery,Drupal);