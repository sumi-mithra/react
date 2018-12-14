import React, { Component } from 'react';

class App extends Component {
render()
{
    return(
        <div>
            <h1>Hello Welcome</h1>
            <label>USER NAME</label>
                <input type="text" name="name"/><br/><br/>
                <label>PASSWORD</label>
            <input type="password" name="password"/><br/><br/>
            <input type="button" name="submit" value="Submit"/>

                
        </div>
    );

}
}
export default App;
