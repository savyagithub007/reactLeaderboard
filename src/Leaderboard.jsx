import React, { useState } from 'react';

function Leaderboard() {
    const [players, setPlayers] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        score: ''
    });

    const change = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value});
    };

    const addPlayer = () =>{
        setPlayers([...players, {...formData, score: parseInt(formData.score) || 0}]);
        setFormData({ firstName: '', lastName: '', country: '', score: ''});
    };

    const incrementScore = (index) =>{
        const newPlayers = [...players];
        newPlayers[index].score +=1;
        setPlayers(newPlayers);
    }

    const decrementScore = (index) =>{
        const newPlayers = [...players];
        newPlayers[index].score -=1;
        setPlayers(newPlayers);
    };

    const deletePlayer = (index) =>{
        const newPlayers = players.filter((_, i) => i !== index);
        setPlayers(newPlayers);
    };

  return (
    <div>
      <h2>Leaderboard</h2>
      <div>
        <input type="text"
        name='firstName' 
        value={formData.firstName}
        placeholder='First Name'
        onChange={change}/>

        <input type="text" 
        name='lastName'
        value={formData.lastName}
        placeholder='Last Name'
        onChange={change} />

        <select name="country" value={formData.country}onChange={change}>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Austriela">Austriela</option>
            <option value="Frence">Frence</option>
            <option value="Japan">Japan</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
        </select>

        <input type="number"
        name='score'
        value={formData.score}
        placeholder='score'
        onChange={change}/>

        <button onClick={addPlayer}>Add</button>
      </div>

      <table>
        <tbody>{players.map((player, index) =>(
            <tr key={index}>
                <td>{player.firstName}</td>
                <td>{player.lastName}</td>
                <td>{player.country}</td>
                <td>{player.score}</td>
                <td>
                    <button onClick={() => incrementScore(index)}>+5</button>
                    <button onClick={() => decrementScore(index)}>-5</button>
                    <button onClick={() => deletePlayer(index)}>Delete</button>
                </td>
            </tr>
        ))}</tbody>
      </table>
    </div>
  );
};

export default Leaderboard
