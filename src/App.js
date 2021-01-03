import React,{ Component } from 'react';
import Table from './table';
import AddPeople from './components/AddPeople';
import FilterPeople from './components/FilterPeople';
import './App.css';

export default class App extends Component {
    state = {table: Table};
    addData = (nome,idade,cidade) => {
        const table = [...this.state.table];
        table.push({id:this.state.table.length + 1,nome:nome,idade:idade,cidade:cidade});
        this.setState({table: table});
        console.log(table)
    };
    handleDelete = (element) => {
        const table = [...this.state.table];
        const filteredTable = table.filter((tableElement) => tableElement !== element);
        this.setState({table: filteredTable});
        console.log(this.state.table);
    }
    render() {
        
        return (
            <div>
            <header style={headerStyle}>
                <h1>Filtro em Tabela</h1>
            </header>
            <section style={{display:'flex'}}>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Cidade</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                <tbody>
                    {this.state.table.map((element)=> {
                        return (
                            <tr key={element.id}>
                                <td>{element.nome}</td>
                                <td>{element.idade}</td>
                                <td>{element.cidade}</td>
                                <td>
                                    <button onClick={() => this.handleDelete(element)}>Deletar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                <AddPeople onAdd={this.addData} />
            </section>
            <section style={{display:'flex',margin:'50px'}}>
                    <FilterPeople table={this.state.table} />
            </section>
            </div>
        )
    }
}
const headerStyle = {backgroundColor:'salmon',height:'150px',display:'flex',justifyContent:'center',alignItems:'center'}