import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quiz, setQuiz] = useState({ numAttempts: 4, quizInProgress: false });

    return (
        <span>
            <Button
                onClick={() =>
                    setQuiz({
                        numAttempts: quiz.numAttempts - 1,
                        quizInProgress: true
                    })
                }
                disabled={quiz.numAttempts == 0 || quiz.quizInProgress}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() =>
                    setQuiz({
                        numAttempts: quiz.numAttempts,
                        quizInProgress: false
                    })
                }
                disabled={!quiz.quizInProgress}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={() =>
                    setQuiz({
                        numAttempts: quiz.numAttempts + 1,
                        quizInProgress: quiz.quizInProgress
                    })
                }
                disabled={quiz.quizInProgress}
            >
                Mulligan
            </Button>
            {quiz.numAttempts}
        </span>
    );
}
