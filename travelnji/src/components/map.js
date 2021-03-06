import React, {Component} from 'react'
import ImageMapper from 'react-image-mapper';
import Place from "./Place";
import Pic from "../assets/pic1.jpg"
import Pic1 from "../assets/pic5.jpg"
import Pic2 from "../assets/pic6.jpg"
import "../index.css"
let URL = "https://kingabdullah.jo/sites/default/files/map-en.png"
let MAP = {
  name: "my-map",
  areas: [
    { name: "aqaba", shape: "poly", coords: [171,891,265,906,271,885,275,801,286,773,273,764,251,763,237,759,233,749,253,731,251,710,259,697,268,684,267,665,277,660,275,650,261,653,253,649,243,653,239,643,233,639,224,623,221,633,215,643,211,653,208,667,207,679,201,688,208,701,201,711,202,718,199,726,204,745,193,762,187,777,189,795,183,803,183,817,181,826,183,836,173,847,168,855,172,860,169,870,168,883],  fillColor: "#318f4a"  },
    { name: "amman", shape: "poly", coords: [341,400,345,397,357,371,369,371,365,379,377,384,386,383,389,375,399,373,501,483,550,543,417,541,374,539,361,530,359,495,345,493,337,495,336,504,320,505,312,493,319,476,312,472,317,467,309,460,305,447,313,434,293,427,290,419,297,413,286,413,281,405,286,400,299,397,305,394,305,384,315,383,319,377,327,374,339,389], fillColor: "#318f4a"  },
    { name: "ma'an", shape: "poly", coords: [549,541,373,539,345,615,338,648,313,642,310,652,286,649,284,658,276,661,266,667,266,680,259,706,252,711,253,730,247,738,235,749,238,757,249,759,254,765,276,763,287,771,275,801,271,888,267,907,347,924,418,865,461,796,583,769,609,707,665,674], fillColor: "#318f4a"  },
    { name: "irbid", shape: "poly", coords: [305,246,315,247,323,250,331,255,333,261,343,262,342,274,349,280,353,288,361,294,364,306,354,310,346,318,340,314,329,313,315,308,307,303,293,310,283,310,277,320,275,335,269,351,266,306,270,292,270,284,268,273,271,265,279,258,293,252], fillColor: "#318f4a"  },
    { name: "ajloun", shape: "poly", coords: [284,309,305,306,318,313,309,322,305,336,296,342,289,352,283,351,273,354,269,348,276,328,277,318 ], fillColor: "#318f4a" },
  ]
}
class Map extends Component {
    state = {place :""}

    clicked = area => {
        this.setState({place: area.name})
    }
    
    render () {
        return (
            <div>
                <div className="App">
                    <div style={{position:'relative', width:'100%', textAlign:'center'}}>
                        <img src={Pic} alt='patra' width={'100%'} height={500} />
                        <div style={{position:'absolute',top: 75, color:'#c2a776',left:'10%'}}>
                            <h1 style={{fontSize:49, fontFamily:'Sofia', color:'#1b875b' }}>Welcome To Travelnji</h1>
                            <h3 style={{fontSize:20, fontFamily:'Sofia', color:'#5fd18f' }}>Is the perfect destination for sustainable tourism in Jordan.</h3>
                        </div>
        
                    </div>
                 </div>  
                  
                 <div style={{ position:'absolute' ,top:650, color:'#4d79ff',left:'9%'}}>
                 <img src={Pic1} width={400} height={400} left={70}/> </div>
                     <div style={{position:'absolute',top:700, color:'#4d79ff',left:'60%' ,right:'5%'}}>
                         <p style={{fontSize:20, fontFamily:'Sofia', color:'#1e7b1e' }}>As this website displays a variety of tourist areas in Jordan so that tourists can choose between them when they come to Jordan. It reviews the most important environmentally friendly activities that can be held in these areas.</p>
                     </div>
                     <div>
                         <div style={{ position:'absolute' ,top:1200, color:'#4d79ff',left:'60%'}}>
                 <img src={Pic2} width={500} height={400} left={70}/> </div>
                     <div style={{position:'absolute',top:1350, color:'#4d79ff',right:'50%' , left:'9%'}}>
                         <p style={{fontSize:20, fontFamily:'Sofia', color:'#1FA496' }}>As this website displays a variety of tourist areas in Jordan so that tourists can choose between them when they come to Jordan. It reviews the most important environmentally friendly activities that can be held in these areas.</p>
                     </div> 
                     </div>
                    
                {/* <div className="container"  style={{ display: 'ruby',marginLeft: 'auto', marginRight: '50%',width: '50%'}}>
                    <ImageMapper src={URL} style={{}} map={MAP}  
                       
                        onClick={area => this.clicked(area)} 	
                    />
                </div> */}
                <Place place={this.state.place}/>
            </div>
        )
    }
}

export default Map;