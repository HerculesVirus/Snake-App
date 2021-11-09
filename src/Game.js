import React from 'react';
import Snake from './snake';
import Food from './food';
import './Game.css'
  
const randomNumber= ()=>{
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random()*(max-min)+min)/2)*2;
    let y = Math.floor((Math.random()*(max-min)+min)/2)*2;
    return [x,y]
}
class Game extends React.Component{
    state = {
        food: randomNumber(),
        speed: 500,
        direction: 'RIGHT',
        snakeDots: [
            [0,0],
            [5,0]
        ]
    }
    componentDidMount(){
        //setInterval(this.movesnake, this.state.speed)
        document.onkeydown = this.onKeyDown;
    }
    onKeyDown = (e) => {
        e = e || window.event;
        switch(e.keyCode){
            case 38:
                this.setState({direction: 'UP'})
                break;
            case 37:
                this.setState({direction: 'Left'})
                break;
            case 39:
                this.setState({direction: 'RIGHT'})
                break;
            case 40:
                this.setState({direction: 'DOWN'})
                break;
            default:
                console.log("Out of Box Key is Pressed")
                break;
        }
    }
    movesnake = () => {
        let dots= [...this.state.snakeDots];
        let head = dots[dots.length -1];
        console.log("Head start: "+head)

        switch(this.state.direction){
            case 'RIGHT':
                head = [head[0]+5, head[1]]
                break;
            case 'LEFT' :
                head =[head[0]-5 ,head[1]]
                break;
            case 'UP':
                head = [head[0], head[1]+5]
                break;
            case 'DOWN':
                head = [head[0], head[1]-5]
                break;
            default:
                console.log("You pressed out of Arrow key ")
                break;
        }
        dots.push(head)
        dots.shift();
        console.log("dots shift : "+dots.shift())
        console.log("dots : "+dots)
        this.setState({
            snakeDots: dots,
        })

    }
    render(){
        return(
            <div className='game-area'>
                <Snake snakeDots={this.state.snakeDots}/>
                <Food dot={this.state.food}/>
            </div>
        )
    }
}
export default Game;