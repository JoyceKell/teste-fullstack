
# Título do Projeto

O projeto consiste em uma aplicação web feita em React e Node.js, utilizando Material UI como framework de design. O objetivo da aplicação é permitir que o usuário edite e busque horários de uma jornada de trabalho.
Toda a comunicação entre o frontend e o backend é feita por meio de APIs RESTful desenvolvidas em Node.js, utilizando o framework Express.

## Instalação

Instale as dependências do backend com Npm e do frontend com Yarn

```bash
  npm install
  yarn add
```
    
## Documentação da API

- BaseUrl FrontEnd: http://localhost:3001
- BaseUrl Backend: http://localhost:3000/jornada
#### Retorna todos os itens

```http
  GET /
```

#### Retorna um objeto

```http
 {
	"jornadaTrabalho": {
		"segunda": {
			"inicio": "08:00",
			"fim": "17:00"
		},
		"terca": {
			"inicio": "08:00",
			"fim": "17:00"
		},
		"quarta": {
			"inicio": "08:00",
			"fim": "17:00"
		},
		"quinta": {
			"inicio": "08:00",
			"fim": "17:00"
		},
		"sexta": {
			"inicio": "08:00",
			"fim": "17:00"
		},
		"sabado": {
			"inicio": "08:00",
			"fim": "12:00"
		},
		"domingo": {}
	},
	"jornadaInfo": {
		"active": true,
		"action": "Abortar"
	}
}
```

```http
  PUT /
```

É necessário passar o body nesse formato:

```
{
	"novaJornada":[
		{
			"dia": "terca",
			"novoHorario": {
				"inicio": "11:30",
				"fim": "18:00"
			}
		},
		
		{
			"dia": "quarta",
			"novoHorario": {
				"inicio": "10:00",
				"fim": "18:00"
			}
		}
	],
	"novaJornadaInfo": {
		"active": true,
		"action": ""
	}
}
```

Retorna os dias da semana editados:

```
{
	"jornadaTrabalho": {
		"segunda": {
			"inicio": "08:00",
			"fim": "17:00"
		},
		"terca": {
			"inicio": "11:30",
			"fim": "18:00"
		},
		"quarta": {
			"inicio": "10:00",
			"fim": "18:00"
		},
		"quinta": {
			"inicio": "08:00",
			"fim": "17:00"
		},
		"sexta": {
			"inicio": "08:00",
			"fim": "17:00"
		},
		"sabado": {
			"inicio": "08:00",
			"fim": "12:00"
		},
		"domingo": {}
	},
	"jornadaInfo": {
		"active": true,
		"action": ""
	}
}
```

