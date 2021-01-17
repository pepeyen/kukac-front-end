import React from 'react';

//Components
import { Page } from '../components';

//Mock up data
import {
    QuestionStepIssue,
    IQuestionStep,
    IQuestion,
    questions
} from '../services/mockData';


const Home: React.FC = () => {
    const renderQuestionStepIssue = (questionStepIssue: QuestionStepIssue, index: number) => {
        return(
            <li
                key={index}
                className="page__questions-issue"
            >
                <span className="page__question-statement --issue-statment"> - {questionStepIssue.QuestionStepIssueStatement}</span>
            </li>
        );
    };

    const renderQuestionStepIssues = (questionStepIssues: QuestionStepIssue[]) => {
        return(
            <ul className="page__questions-issues">
                {questionStepIssues.map((questionStepIssue, index) => renderQuestionStepIssue(questionStepIssue, index))}
            </ul>
        );
    };

    const renderQuestionStep = (questionStep: IQuestionStep, index: number) => {
        return(
            <li
                key={index}
                className="page__questions-step"
            >
                <p className="page__question-title --sub-title">{questionStep.questionStepId}) <span className="--sub-statement">{questionStep.questionStepStatement}</span></p>
                {renderQuestionStepIssues(questionStep.questionStepIssueList)}
            </li>
        );
    };

    const renderQuestionSteps = (questionSteps: IQuestionStep[]) => {
        return(
            <ul className="page__questions-steps">
                {questionSteps.map((questionStep, index) => renderQuestionStep(questionStep, index))}
            </ul>
        );
    };

    const renderQuestion = (question: IQuestion, index: number) => {
        const multiParagraphStatement = question.questionStatement.split('. ');

        return(
            <li
                key={index}
                className="page__question --thin-borders"
            >
               <h3 className="page__question-title --main-title">{question.questionId}</h3>
               {question.questionPrelude ? <span className="page__question-statement --main-statement">{question.questionPrelude}</span> : null}
               {multiParagraphStatement.map((paragraph, index) => <p className="page__question-statement --main-statement" key={index}>{paragraph}</p>)}
               {question.questionSteps ? renderQuestionSteps(question.questionSteps) : null}
            </li>
        );
    };

    const renderQuentions = () => {
        return questions.map((question, index) => renderQuestion(question, index));
    };

    return(
        <Page title="Detalhes Das Questões">
            <ul className="page__questions">
                {renderQuentions()}
            </ul> 
        </Page>
    );
};

export default Home;