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
// Tamil 99 keys
var ta99 = new Array();
//caret symbol for special purposes
ta99['\\^']="\u200C";

// mellina vallina rule
ta99["\u0B99\u200Ch"]="\u0B99\u0BCD\u0B95\u200C";
ta99["\u0B9E\u200C\\["]="\u0B9E\u0BCD\u0B9A\u200C";
ta99["\u0BA3\u200Co"]="\u0BA3\u0BCD\u0B9F\u200C";
ta99["\u0BA8\u200Cl"]="\u0BA8\u0BCD\u0BA4\u200C";
ta99["\u0BAE\u200Cj"]="\u0BAE\u0BCD\u0BAA\u200C";
ta99["\u0BA9\u200Cu"]="\u0BA9\u0BCD\u0BB1\u200C";

//auto pulli rule for same letter repeat
ta99["\u0BB3\u200Cy"]="\u0BB3\u0BCD\u0BB3\u200D";
ta99["\u0BB3\u0BCD{2}"]="\u0BB3\u0BCD\u0BB3\u200C";
ta99["\u0BB1\u200Cu"]="\u0BB1\u0BCD\u0BB1\u200D";
ta99["\u0BB1\u0BCD{2}"]="\u0BB1\u0BCD\u0BB1\u200C";
ta99["\u0BA9\u200Ci"]="\u0BA9\u0BCD\u0BA9\u200D";
ta99["\u0BA9\u0BCD{2}"]="\u0BA9\u0BCD\u0BA9\u200C";
ta99["\u0B9F\u200Co"]="\u0B9F\u0BCD\u0B9F\u200D";
ta99["\u0B9F\u0BCD{2}"]="\u0B9F\u0BCD\u0B9F\u200C";
ta99["\u0BA3\u200Cp"]="\u0BA3\u0BCD\u0BA3\u200D";
ta99["\u0BA3\u0BCD{2}"]="\u0BA3\u0BCD\u0BA3\u200C";
ta99["\u0B9A\u200C\\["]="\u0B9A\u0BCD\u0B9A\u200D";
ta99["\u0B9A\u0BCD{2}"]="\u0B9A\u0BCD\u0B9A\u200C";
ta99["\u0B9E\u200C\\]"]="\u0B9E\u0BCD\u0B9E\u200D";
ta99["\u0B9E\u0BCD{2}"]="\u0B9E\u0BCD\u0B9E\u200C";

ta99["\u0B95\u200Ch"]="\u0B95\u0BCD\u0B95\u200D";
ta99["\u0B95\u0BCD{2}"]="\u0B95\u0BCD\u0B95\u200C";
ta99["\u0BAA\u200Cj"]="\u0BAA\u0BCD\u0BAA\u200D";
ta99["\u0BAA\u0BCD{2}"]="\u0BAA\u0BCD\u0BAA\u200C";
ta99["\u0BAE\u200Ck"]="\u0BAE\u0BCD\u0BAE\u200D";
ta99["\u0BAE\u0BCD{2}"]="\u0BAE\u0BCD\u0BAE\u200C";
ta99["\u0BA4\u200Cl"]="\u0BA4\u0BCD\u0BA4\u200D";
ta99["\u0BA4\u0BCD{2}"]="\u0BA4\u0BCD\u0BA4\u200C";
ta99["\u0BA8\u200C;"]="\u0BA8\u0BCD\u0BA8\u200D";
ta99["\u0BA8\u0BCD{2}"]="\u0BA8\u0BCD\u0BA8\u200C";
ta99["\u0BAF\u200C\'"]="\u0BAF\u0BCD\u0BAF\u200D";
ta99["\u0BAF\u0BCD{2}"]="\u0BAF\u0BCD\u0BAF\u200C";

ta99["\u0BB5\u200Cv"]="\u0BB5\u0BCD\u0BB5\u200D";
ta99["\u0BB5\u0BCD{2}"]="\u0BB5\u0BCD\u0BB5\u200C";
ta99["\u0B99\u200Cb"]="\u0B99\u0BCD\u0B99\u200D";
ta99["\u0B99\u0BCD{2}"]="\u0B99\u0BCD\u0B99\u200C";
ta99["\u0BB2\u200Cn"]="\u0BB2\u0BCD\u0BB2\u200D";
ta99["\u0BB2\u0BCD{2}"]="\u0BB2\u0BCD\u0BB2\u200C";
ta99["\u0BB0\u200Cm"]="\u0BB0\u0BCD\u0BB0\u200D";
ta99["\u0BB0\u0BCD{2}"]="\u0BB0\u0BCD\u0BB0\u200C";
ta99["\u0BB4\u200C/"]="\u0BB4\u0BCD\u0BB4\u200D";
ta99["\u0BB4\u0BCD{2}"]="\u0BB4\u0BCD\u0BB4\u200C";

//auto pulli rule  for vada mozhi ezuthu
ta99["\u0BB8\u200CQ"]="\u0BB8\u0BCD\u0BB8\u200D";
ta99["\u0BB8\u0BCD{2}"]="\u0BB8\u0BCD\u0BB8\u200C";
ta99["\u0BB7\u200CW"]="\u0BB7\u0BCD\u0BB7\u200D";
ta99["\u0BB7\u0BCD{2}"]="\u0BB7\u0BCD\u0BB7\u200C";
ta99["\u0B9C\u200CE"]="\u0B9C\u0BCD\u0B9C\u200D";
ta99["\u0B9C\u0BCD{2}"]="\u0B9C\u0BCD\u0B9C\u200C";
ta99["\u0BB9\u200CR"]="\u0BB9\u0BCD\u0BB9\u200D";
ta99["\u0BB9\u0BCD{2}"]="\u0BB9\u0BCD\u0BB9\u200C";

//otru
ta99["[\u200D|\u200C]q"]="\u0BBE";
ta99["[\u200D|\u200C]w"]="\u0BC0";
ta99["[\u200D|\u200C]e"]="\u0BC2";
ta99["[\u200D|\u200C]r"]="\u0BC8";
ta99["[\u200D|\u200C]t"]="\u0BC7";
ta99["\u0BCDa"]="\u200C";
ta99["[\u200D|\u200C]a"]= "";
ta99["[\u200D|\u200C]s"]="\u0BBF"
ta99["[\u200D|\u200C]d"]="\u0BC1"
ta99["[\u200D|\u200C]f"]="\u0BCD";
ta99["[\u200D|\u200C]g"]="\u0BC6";
ta99["[\u200D|\u200C]z"]="\u0BCC";
ta99["[\u200D|\u200C]x"]="\u0BCB";
ta99["[\u200D|\u200C]c"]="\u0BCA";

// copyright & spl symbols
ta99["\u200Cc"]="\u00A9";
ta99["\u200C\\."]="\u2022";

// uyir
ta99["q"]="\u0B86";
ta99["w"]="\u0B88";
ta99["e"]="\u0B8A";
ta99["r"]="\u0B90";
ta99["t"]="\u0B8F";

ta99["a"]="\u0B85";
ta99["s"]="\u0B87";
ta99["d"]="\u0B89";
ta99["f"]="\u0B83";
ta99["F"]="\u0B83";
ta99["g"]="\u0B8E";

ta99["z"]="\u0B94";
ta99["x"]="\u0B93";
ta99["c"]="\u0B92";

// vada mozhi ezuthu
ta99["Q"]="\u0BB8\u200C";
ta99["W"]="\u0BB7\u200C";
ta99["E"]="\u0B9C\u200C";
ta99["R"]="\u0BB9\u200C";
ta99["T"]="\u0B95\u0BCD\u0BB7\u200C";
ta99["Y"]="\u0BB8\u0BCD\u0BB0\u0BC0";
ta99["O"]="[";
ta99["P"]="]";

//mei
ta99["y"]="\u0BB3\u200C";
ta99["u"]="\u0BB1\u200C";
ta99["i"]="\u0BA9\u200C";
ta99["p"]="\u0BA3\u200C";
ta99["o"]="\u0B9F\u200C";
ta99["\\["]="\u0B9A\u200C";
ta99["\\]"]="\u0B9E\u200C";

ta99["g"]="\u0B8E";
ta99["h"]="\u0B95\u200C";
ta99["j"]="\u0BAA\u200C";
ta99["k"]="\u0BAE\u200C";
ta99["l"]="\u0BA4\u200C";
ta99[";"]="\u0BA8\u200C";
ta99["\'"]="\u0BAF\u200C";

ta99["v"]="\u0BB5\u200C";
ta99["b"]="\u0B99\u200C";
ta99["n"]="\u0BB2\u200C";
ta99["m"]="\u0BB0\u200C";
ta99["/"]="\u0BB4\u200C";


// spl symbols
ta99["M"]="/";
ta99["A"]="\u0BF9";
ta99["S"]="\u0BFA";
ta99["D"]="\u0BF8";
ta99["K"]="\"";
ta99["L"]=":";
ta99["\\:"]=";";
ta99["\""]="\'";
ta99["Z"]="\u0BF3";
ta99["X"]="\u0BF4";
ta99["C"]="\u0BF5";
ta99["V"]="\u0BF6";
ta99["B"]="\u0BF7";

ta99['(.+)\u200C(.+)'] = "$1$2";