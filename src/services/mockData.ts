export interface QuestionStepIssue {
    QuestionStepIssueId?: string,
    QuestionStepIssueStatement: string
};

export interface IQuestionStep {
    questionStepId: string,
    questionStepStatement: string,
    questionStepIssueList: QuestionStepIssue[]
};

export interface IQuestion {
    questionId: number,
    questionPrelude?: string,
    questionStatement: string,
    questionSteps?: IQuestionStep[]
};

export const questions: IQuestion[] = [
    {
        questionId: 1,
        questionStatement: "Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para direita têm o mesmo valor.. Exemplo: 929, 44, 97379.. Fazer um algoritmo que imprima todos os números palíndromos entre um intervalo que será escolhido pelo usuário da aplicação."
    },
    {
        questionId: 2,
        questionStatement: "Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais.. Considerando que alguém está pagando uma compra, escreva um algoritmo que mostre o número mínimo de notas que o caixa deve fornecer como troco.. Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do troco.. Suponha que o sistema monetário não utilize moedas.. O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário."
    },
    {
        questionId: 3,
        questionStatement: "Precisamos controlar melhor os dados de alguns veículos que ficam na nossa garagem e para isso precisamos que seja feito o seguinte:",
        questionSteps: [
            {
                questionStepId: 'a',
                questionStepStatement: "Crie a interface “Veiculo” com os seguintes atributos:",
                questionStepIssueList: [
                    {
                        QuestionStepIssueStatement: 'Modelo'
                    },
                    {
                        QuestionStepIssueStatement: 'Ano de fabricação'
                    },
                    {
                        QuestionStepIssueStatement: 'Quantidade de Portas'
                    },
                    {
                        QuestionStepIssueStatement: 'Marca'
                    }
                ]
            },
            {
                questionStepId: 'b',
                questionStepStatement: "Crie a classe “Carro”, que herda de Veículo e tem os seguintes atributos:",
                questionStepIssueList: [
                    {
                        QuestionStepIssueStatement: 'Quantidade de Portas: entre 2 e 4'
                    }
                ]
            },
            {
                questionStepId: 'c',
                questionStepStatement: "Crie a classe “Moto”, que herda de Veículo, e possui os seguintes atributos:",
                questionStepIssueList: [
                    {
                        QuestionStepIssueStatement: 'Rodas: 2'
                    },
                    {
                        QuestionStepIssueStatement: 'Passageiros: entre 1 e 2'
                    }
                ]
            }
        ]
    },
    {
        questionId: 4,
        questionPrelude: "Deve ser solicitado ao usuário que preencha as informações sobre o seu veículo, os dados devem sersalvos em um arquivo JSON (para não precisar trabalhar com banco de dados, até porque já vai serbem próximo de um banco NoSQL);",
        questionStatement: "Deve ser informado pelo usuário 5 CEP’s, a aplicação deve consumir a api VIACep(https://viacep.com.br/) e obter dados sobre esses CEP’s.. Os CEP’s informados pelo usuário devem ser inicialmente armazenados em um array, e oconsumo da API deve ser de forma síncrona (aguardar a resposta do primeiro para iniciar arequisição do segundo e assim por diante).Os dados após o processamento devem ser exibidos na tela."
    },
];
