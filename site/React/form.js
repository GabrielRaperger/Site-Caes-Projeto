class MyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nome: "", motivo: "", email: "", numero: "", texto: "", errormsg: ""
        };
        this.MySubmit = this.MySubmit.bind(this);
        this.ChangeName = this.ChangeName.bind(this);
        this.ChangeReason = this.ChangeReason.bind(this);
        this.ChangeEmail = this.ChangeEmail.bind(this);
        this.ChangeNumber = this.ChangeNumber.bind(this);
        this.ChangeText = this.ChangeText.bind(this);
    }
    MySubmit(event) {
        event.preventDefault(); 
        if(this.state.numero!="" && !Number(this.state.numero)){
            alert('O Telefone deve ser um número');
        }
        else if(this.state.motivo==""){
            alert('Deve selecionar um motivo');
        }
        else if(this.state.nome==''){
            alert('Deve introduzir o seu nome');
        }
        else if(this.state.email==''){
            alert('Deve introduzir o seu email');
        }
        else{
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('Nome', this.state.nome);
                localStorage.setItem('Motivo', this.state.motivo);
                localStorage.setItem('Email', this.state.email);
                localStorage.setItem('Telefone', this.state.numero);
                localStorage.setItem('Texto', this.state.texto);
                alert("Formulario Submetido Com Sucesso!");
            } else {
                console.log('Web Storage não é suportado!');
            }
        }
    }
    ChangeName(event) {
        this.setState( {nome: event.target.value} );
    }
    ChangeReason(event) {
        var e=event.target;
        this.setState( {motivo: e.options[e.selectedIndex].value} );
    }
    ChangeEmail(event) {
        this.setState( {email: event.target.value} );
    }
    ChangeNumber(event) {
        var err='';
        var n=event.target.value
        this.setState( {numero: n} );
        this.setState( {errormsg: err} );
    }
    ChangeText(event) {
        this.setState( {texto: event.target.value} );
    }
    render(){
        return React.createElement(
            'form', 
            {
                onSubmit:this.MySubmit
            },
            React.createElement(
                'label', {id:'nomeform'}, 'Nome: '
            ),
            React.createElement(
                'input',
                {
                    id:"nomer",
                    type:"text",
                    placeholder:"Nome",
                    onChange:this.ChangeName
                }
            ), 
            React.createElement('br'),
            React.createElement(
                'label', null, 'Motivo: '
            ),
            React.createElement(
                'select',
                {
                    id:"motivo",
                    onChange:this.ChangeReason
                },
                React.createElement(
                    'option', {value:""}, '--Selecione--'
                ),
                React.createElement(
                    'option', {value:"Informação"}, 'Informação'
                ),
                React.createElement(
                    'option', {value:"Reclamação"}, 'Reclamação'
                ),
                React.createElement(
                    'option', {value:"Outro"}, 'Outro'
                ),
            ), 
            React.createElement('br'),
            React.createElement(
                'label', null, 'Email: '
            ),
            React.createElement(
                'input',
                {
                    id:"emailr",
                    type:"email",
                    placeholder:"email",
                    onChange:this.ChangeEmail
                }
            ), 
            React.createElement('br'),
            React.createElement(
                'label', null, 'Telefone: '
            ),
            React.createElement(
                'input',
                {

                    type:"text",
                    placeholder:"telefone",
                    onChange:this.ChangeNumber
                }
            ), 
            React.createElement(
                'strong', null, this.state.errormsg
            ),
            React.createElement('br'),
            React.createElement(
                'label', null, 'Texto: '
            ),
            React.createElement(
                'textarea',
                {
                    id:"mensagemr",
                    placeholder:"Escreva aqui a sua mensagem",
                    onChange:this.ChangeText
                }
            ),
            React.createElement('br'),
            React.createElement(
                'button',
                {
                    id:"enviarr",
                    type:"submit"
                },'Enviar'
            )
        )
    }
}
ReactDOM.render(
    React.createElement(
        MyForm
    ),
    document.getElementById('mydiv')
);