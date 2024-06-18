* {
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}
.house {
  margin-right: 10px;
  color: black;
  font-size: 10px;
  text-decoration: none;
}

.house:hover {
  border-bottom: 3px solid rgb(73, 73, 172);
}
.shadowing {
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
}

html {
  overflow-x: hidden;
  box-sizing: border-box;
  /* background-color: gray;   */
}

.vertical_dotted_line {
  border-left: 1px dotted black;
  height: 100px;
}

.dropdownAnchor {
  text-decoration: none;
  color: black;
  text-transform: capitalize;
}
.dropdownAnchor:hover {
  text-decoration: underline;
  cursor: pointer;
}

.fontTen {
  font-size: 8px;
}

.green {
  color: green;
}

span > .bi-check {
  color: red;
}

/* .table-striped>tbody>tr:nth-child(odd)>td, 
.table-striped>tbody>tr:nth-child(odd)>th {
   background-color: rgb(56, 56, 143); 
 } */

.carousel-indicators .active {
  background-color: #f00;
}

.carousel-control-next,
.carousel-control-prev,
.carousel-indicators {
  filter: invert(100%);
}

footer a {
  text-decoration: none;
  color: black;
}

footer a:hover {
  text-decoration: underline;
}

/* footer li.header {
    margin-bottom: 10%;;
} */

footer .header {
  font-weight: bold;
  margin-bottom: 5%;
}

footer .marginIcons {
  margin-right: 5%;
  font-size: 15%;
  float: left;
  flex-direction: row;
}

#hidden1 {
  display: none;
}
#hidden2 {
  display: none;
}
#hidden3 {
  display: none;
}
#hidden4 {
  display: none;
}

#liPhoneFirst:hover + #hidden1 {
  display: block;
}
#liPhoneSecond:hover + #hidden2 {
  display: block;
}

#liPhoneThird:hover + #hidden3 {
  display: block;
}
#liPhoneFour:hover + #hidden4 {
  display: block;
}


#hidden1:hover {
  display: block;
}
#hidden2:hover {
  display: block;
}
#hidden3:hover {
  display: block;
}
#hidden4:hover {
  display: block;
}

#hidden1 a {
  text-transform: capitalize;
  text-decoration: none;
  color: black;
}
#hidden2 a {
  text-transform: capitalize;
  text-decoration: none;
  color: black;
}
#hidden3 a {
  text-transform: capitalize;
  text-decoration: none;
  color: black;
}
#hidden4 a {
  text-transform: capitalize;
  text-decoration: none;
  color: black;
}

#hidden1 li:hover {
  text-decoration: underline;
}

#hidden2 li:hover {
  text-decoration: underline;
}

#hidden3 li:hover {
  text-decoration: underline;
}

#hidden4 li:hover {
  text-decoration: underline;
}

.headerPhone {
  text-transform: capitalize;
  color: black;
  font-size: 10px Im !important;
  margin-left: 1px;
  text-decoration: none;
  margin-top: 5%;
}

.headerPhone li:hover  {
  text-decoration: none !important;
}

.lowercase {
  text-transform: lowercase;
}

.bi-check {
  font-size: 20px;
}

#tableCenter {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
.dropdown-menu {
  min-width:3px;
}

td {
  font-weight: bold;
}


#buttonDownload {
  border: 3px solid #0D6EFD;
}

#buttonDownload:hover {
    background-color: #0D6EFD;
    color:white;
}
#buttonDownload:active {
  background-color: rgb(14, 14, 114);
  border: 3px solid rgb(14, 14, 114);

}

#buttonDownloadPremium {
  color:white;
  background-color: #cb581f;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
}

#buttonDownloadPremium:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
}


#buttonDownloadPremium:active {
  background-color: #de4d05;
  border:none
}

.hidden {
  display: hidden;
}
