import React,{ Component } from 'react';

export default class FilterPeople extends Component {
    state = {filtro:[]}
    handleFilter = (event) => {
        event.preventDefault();
        const arrayFiltrado = this.props.table.filter((elemento) => {
            return (elemento.idade > event.target.idade.value && elemento.cidade === event.target.cidade.value)
        });
        this.setState({filtro: arrayFiltrado});
    }
    render() {
        return (
            <div style={{display:'flex', alignItems:'center'}}>
                <form onSubmit={this.handleFilter}>
                    <label>
                        Idade:
                        <select name="idade">
                            <option></option>
                            <option value={15}>Acima de 15 anos</option>
                            <option value={25}>Acima de 25 anos</option>
                            <option value={35}>Acima de 35 anos</option>
                            <option value={45}>Acima de 45 anos</option>
                        </select>
                    </label>
                    <label>
                        Cidade:
                        <select name="cidade">
                            <option></option>
                            <option value={'Jaragua do Sul'}>Jaragua do Sul</option>
                            <option value={'Joinville'}>Joinville</option>
                            <option value={'Blumenau'}>Blumenau</option>
                            <option value={'Guaramirim'}>Guaramirim</option>
                        </select>
                    </label>
                    <input type="submit" value="filtrar" style={submitStyle} />
                </form>
                <div style={resultContainerStyle}>
                    {this.state.filtro.map((elemento) => <div style={resultStyle}>{elemento.nome}</div>)}
                </div>
            </div>
        )
    }
}
const submitStyle = {backgroundColor:'salmon',fontSize:'20px',padding:'7px',height:'35px'}
const resultStyle = {padding:'10px',border:'1px solid salmon',margin:'7px',borderRadius:'4px',fontSize:'22px', backgroundColor:' rgb(248, 163, 153)',textAlign:'center'}
const resultContainerStyle = {marginLeft:'200px',width:'400px'}