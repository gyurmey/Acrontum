import React from 'react'
import {connect} from 'react-redux'
import {  counterAdd } from '../actions/slotActions'

const slots = ({slot: {slots, counter},  counterAdd}) => {


   const  onClick = () => {

     counterAdd();

   }


    return (
        <div className="container">
            <h6>Car park level 1</h6>
              <div className="park-level-one-one">
                  {slots && counter.includes(0) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(1) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(2) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(3) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(4) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(5) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(6) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(7) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(8) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                
            <button type="button" className="btn btn-info" onClick={onClick}>Operator</button>
             
              </div>
              <br/>

              <div className="park-level-one-two">
                  {slots && counter.includes(9) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(10) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(11) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(12) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(13) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(14) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(15) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(16) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(17) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                
            </div>
            <br/>

            <div className="park-level-one-three">
                {slots && counter.includes(18) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(19) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(20) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(21) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(22) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(23) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(24) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(25) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(26) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}

             </div>
             <br/>
                <div className="park-level-one-four">
                {slots && counter.includes(27) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(28) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(29) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(30) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(31) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(32) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(33) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(34) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(35) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}

                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <h6>Car park level 2</h6>

                <div className="park-level-two-one">
                  {slots && counter.includes(36) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(37) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(38) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(39) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(40) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(41) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(42) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(43) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(44) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                
             
              </div>
              <br/>

              <div className="park-level-two-two">
                 {slots && counter.includes(45) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(46) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(47) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(48) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(49) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(50) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(51) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(52) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(53) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                
            </div>
            <br/>

            <div className="park-level-two-three">
            {slots && counter.includes(54) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}

                {slots && counter.includes(55) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(56) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(57) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(58) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(59) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(60) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(61) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(62) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}

             </div>
             <br/>
                <div className="park-level-two-four">
                {slots && counter.includes(63) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(64) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(65) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(66) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(67) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(68) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(69) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(70) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(71) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}

                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <h6>Car park level 3</h6>

                <div className="park-level-three-one">
                  {slots && counter.includes(72) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(73) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(74) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(75) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(76) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(77) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(78) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(79) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(80) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                
             
              </div>
              <br/>

              <div className="park-level-three-two">
                 {slots && counter.includes(81) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(82) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(83) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(84) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(85) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(86) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(87) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(88) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                  {slots && counter.includes(89) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                
            </div>
            <br/>

            <div className="park-level-three-three">
                 {slots && counter.includes(90) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(91) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(92) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(93) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(94) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(95) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(96) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(97) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(98) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}

             </div>
             <br/>
                <div className="park-level-three-four">
                {slots && counter.includes(99) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(100) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(101) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(102) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(103) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(104) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(105) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(106) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}
                {slots && counter.includes(107) ? ( <span style={{"backgroundColor":"green"}} className="item"></span>) : (<span className="item"></span>)}

                </div>

                <br/>
                <br/>
                <br/>
                <br/>

        </div>
    )
}


const mapToStateProps = state => ({
    slot: state.slot
})

export default connect(mapToStateProps, {counterAdd})(slots);
