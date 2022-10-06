export default function Tabela(){

    let contatos =[{
        nome: 'Chico',
        telefone:'85 98888 8888',
        cidade: 'Caucaia-CE'
    },
    {
        nome: 'Sofia',
        telefone:'85 98888 8888',
        cidade: 'Fortaleza-CE'
    },
    {
        nome: 'Amanda',
        telefone:'85 98888 8888',
        cidade: 'Jurema-CE'
    },{
        nome: 'Arnaldo',
        telefone:'85 98888 8888',
        cidade: 'Bela Vista-CE'
    }
]
    return(
        <>
            <hr/>

            <table  className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                {contatos.map((cont)=>{
                    return (
                        <tr>
                            <td>{cont.nome}</td>
                            <td>{cont.telefone}</td>
                            <td>{cont.cidade}</td>
                        </tr>
                    )
                })};
                </tbody>
            </table>
        </>
    )

}