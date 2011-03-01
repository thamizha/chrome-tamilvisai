/*  Gopi's Unicode Converters Version 3.1
    Copyright (C) 2010 Gopalakrishnan (Gopi) http://www.higopi.com

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    Further to the terms mentioned you should leave this copyright notice
    intact, stating me as the original author.
*/
var lang = "tamil";
var sPos = 0;
var isTh = false;
var isNg = false;
var kbmode = "roman";
var pkbmode = "roman";
var SplKeys = new Array();
SplKeys["ZR"] = 0;
SplKeys["BS"] = 8;
SplKeys["CR"] = 13;
var hotkey = false;
var english = new Array();


function initExt(event)
{   
chrome.extension.sendRequest({text: "tamilKeySelLang"}, function(response) {
  kbmode = response.text;
});

}

window.addEventListener("load",initExt,true);
window.addEventListener("click",initExt,true);

window.addEventListener("keypress",convertThis,false);
window.addEventListener("keydown",toggleKBMode,false);

   
function isEnglish(elem)
{
	var alphaExp = /[a-zA-Z]+/;
	if(elem.match(alphaExp))
		return true;
	else
		return false;
}

function convertThis(e,numchar)
{
	Key = e.keyCode;
	Char = String.fromCharCode(Key);
	if(typeof numchar == "undefined")
		numchar = 4;
	myField = e.target;
	if( myField.selectionStart >= 0)
	{
		if(isSplKey(Key) ||  e.ctrlKey )
			return true;
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		txtTop = myField.scrollTop;
		if(myField.value.length == 0)
		{
			prevChar = "";
			myField.value = getLang(prevChar,Char, startPos)
		}
		else
		{
			prevChar = myField.value.substring(startPos - 1,startPos);
			prevStr =  myField.value.substring(0,startPos - 1);
			if(prevChar == chnbin)
			{
				prevChar = myField.value.substring(startPos - 2,startPos);
				prevStr =  myField.value.substring(0,startPos - 2);
			}
			cpos = getCursorPosition(myField);
			if(cpos[1] >= numchar)
			{
				prevChar = myField.value.substring(startPos - numchar,startPos);
				prevStr =  myField.value.substring(0,startPos - numchar);
				if(isEnglish(prevChar))
				{
					prevChar = myField.value.substring(startPos - 1,startPos);
					prevStr =  myField.value.substring(0,startPos - 1);
					if(prevChar == chnbin)
					{
						prevChar = myField.value.substring(startPos - 2,startPos);
						prevStr =  myField.value.substring(0,startPos - 2);
					}
				}
			}
			myField.value = prevStr + getLang(prevChar,Char, myField.selectionStart)
					  + myField.value.substring(endPos, myField.value.length);
		}
		myField.selectionStart = sPos ;
		myField.selectionEnd = sPos;
		if((myField.scrollHeight+4)+"px" != myField.style.height)
			myField.scrollTop = txtTop;
		e.stopPropagation();
		e.preventDefault();
	}
}

function toggleT(obj)
{
	savepref = eval('document.'+obj.form.name+'.savepref');
	if(savepref != null)
	{
		savepref.disabled = false;
		savepref.onclick = savePref;
	}
	isTh = obj.checked;
	if(isTh)
		ta['t'] = "\u0BA4\u0BCD";
	else
		ta['t'] = "\u0B9F\u0BCD";
}

function toggleG(obj)
{
	savepref = eval('document.'+obj.form.name+'.savepref');
	if(savepref != null)
	{
		savepref.disabled = false;
		savepref.onclick = savePref;
	}
	isNg = obj.checked;
	if(isNg)
		ta['g'] = "\u0B99\u0BCD";
	else
		ta['g'] = "\u0B95\u0BCD"
}

function toggleKBMode(e,obj)
{
	if(obj != null)
	{
		pkbmode = kbmode;
		kbmode = obj.value;
	}
	else
	{
		key = e.keyCode;
		if(key == 18)
			hotkey = true;		
		if (key == 120 && ! hotkey)
		{
			if(kbmode != "english")
			{
				pkbmode = kbmode;
				kbmode = "english";				
			}
			else
			{
				kbmode = pkbmode;
				pkbmode = "english";
			}
		}			
		if (key == 119 &&  hotkey)
		{
				kbmode = pkbmode;
				pkbmode = "tamil";				
		}
		if (key == 120 &&  hotkey)
		{
				kbmode = pkbmode;
				pkbmode = "tamil99";				
		}
		if (key == 121 &&  hotkey)
		{
				kbmode = pkbmode;
				pkbmode = "typewriter";				
		}
	
	chrome.extension.sendRequest({text: "setTamilKeySelLang",kbmode: kbmode}, function(response) {	});
	}
}

function isSplKey(keynum)
{
	retVal = false;
	for(i in SplKeys)
	{
		if(keynum == SplKeys[i])
			retVal = true;
	}
	return retVal;
}

function getLang(prv, txt, sP)
{
	sPos = sP;
	prvPrv = prv;
	if(kbmode == "english")
	{
		retTxt = prv+txt;
		sPos ++;
	}
	else if(kbmode == "typewriter")
	{
		if(isEnglish(prvPrv))
			prv = "";
		if(prv == ugar && mapLang(txt,sP,"tw") == uugar)
			retTxt = mapLang(prv+txt,sP,"tw");
		else
			retTxt = prv+mapLang(txt,sP,"tw");
		if(isEnglish(prvPrv))
			retTxt = prvPrv + retTxt;
	}
	else if(kbmode == "tamil99")
	{
		if(isEnglish(prvPrv))
			prv = "";
		retTxt = mapLang(prv+txt,sP,"ta99");
		if(isEnglish(prvPrv))
			retTxt = prvPrv + retTxt;
	}
	else
	{
		if(pkbmode == "english")
		{
			retTxt = prv+mapLang(txt);
			pkbmode = "roman";
		}
		else
		{
			if(isEnglish(prvPrv))
				prv = "";
			retTxt = mapLang(prv+txt);
			if(isEnglish(prvPrv))
				retTxt = prvPrv + retTxt;
		}
	}
	return retTxt;
}

function mapLang(txt,sP,mod)
{
	if(sP != null)
		sPos = sP;
	prvlen = txt.length;
	txtarr = eval(lang.substring(0,2));
	if(mod != null && mod == "tw")
		txtarr = eval(lang.substring(0,2)+"tw");
	if(mod != null && mod == "ta99")
		txtarr = eval("ta99");
	retTxt = "";
	for(itm in txtarr)
	{
		rexp = new RegExp(itm,"g");
		txt = txt.replace(rexp, txtarr[itm]);
	}
	sPos += (txt.length -prvlen +1);
	return txt;
}

function getCursorPosition(textarea)
{
	var txt = textarea.value;
	var len = txt.length;
	var erg = txt.split("\n");
	var pos = -1;
	if(typeof document.selection != "undefined")
	{ // FOR MSIE
	range_sel = document.selection.createRange();
	range_obj = textarea.createTextRange();
	range_obj.moveToBookmark(range_sel.getBookmark());
	range_obj.moveEnd('character',textarea.value.length);
	pos = len - range_obj.text.length;
	}
	else if(typeof textarea.selectionStart != "undefined")
	{ // FOR MOZILLA
	pos = textarea.selectionStart;
	}
	if(pos != -1)
	{
		for(ind = 0;ind<erg.length;ind++)
		{
			len = erg[ind].length + 1;
			if(pos < len)
				break;
			pos -= len;
		}
		ind++; pos++;
		return [ind, pos]; // ind = LINE, pos = COLUMN
	}
}
