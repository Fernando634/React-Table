import React,{ Component } from 'react';
import './AddPeople.css';

export default class AddPeople extends Component {
    submitData = (event) => {
        event.preventDefault();
        let nome = event.target.nome.value;
        let idade = event.target.idade.value;
        let cidade = event.target.cidade.value;
        this.props.onAdd(nome,idade,cidade)
        event.target.nome.value = '';
        event.target.idade.value = '';
        event.target.cidade.value = '';
    }
    render() {
        return (
            <div style={{width:'50%'}}>
                <form onSubmit={this.submitData}>
                    <label>
                        Nome:
                        <input type="text" name="nome" required />
                    </label>
                    <label>
                        Idade:
                        <input type="number" name="idade" required />
                    </label>
                    <label>
                        Cidade:
                       <select name="cidade">
                           <option></option>
                           <option value={'Jaraguá do Sul'}>Jaraguá do Sul</option>
                           <option value={'Blumenau'}>Blumenau</option>
                           <option value={'Joinville'}>Joinville</option>
                           <option value={'Guaramirim'}>Guaramirim</option>
                       </select>
                    </label>
                    <input className="submitInput" type="submit" value="Adicionar" />
                </form>
            </div>
        )
    }
}