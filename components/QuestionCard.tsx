"use client";

import { useState } from "react";
import { type Question } from "@/types";
import { checkAnswer } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string, isCorrect: boolean) => void;
  isAnswered: boolean;
  userAnswer?: string;
}

export default function QuestionCard({
  question,
  onAnswer,
  isAnswered,
  userAnswer,
}: QuestionCardProps) {
  const [fillInput, setFillInput] = useState("");

  const isCorrect =
    isAnswered && userAnswer !== undefined
      ? checkAnswer(userAnswer.charAt(0), question.answer)
      : false;

  function handleOptionClick(option: string) {
    if (isAnswered) return;
    // Options are stored as "A. ...", answer is stored as "A" — compare only the letter
    const optionLetter = option.charAt(0);
    const correct = checkAnswer(optionLetter, question.answer);
    onAnswer(option, correct);
  }

  function handleFillSubmit() {
    if (!fillInput.trim() || isAnswered) return;
    const correct = checkAnswer(fillInput, question.answer);
    onAnswer(fillInput, correct);
  }

  function getOptionStyle(option: string): string {
    if (!isAnswered) {
      return "border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700";
    }
    const optionLetter = option.charAt(0);
    const isThisCorrect = checkAnswer(optionLetter, question.answer);
    const isThisSelected = userAnswer === option;

    if (isThisCorrect) return "border-green-400 bg-green-50 text-green-800 font-medium";
    if (isThisSelected && !isThisCorrect) return "border-red-400 bg-red-50 text-red-800";
    return "border-slate-200 text-slate-400";
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 md:p-7">
      {/* Question text */}
      <p className="text-base md:text-lg font-medium text-slate-800 mb-6 leading-relaxed">
        {question.question}
      </p>

      {/* Multiple choice */}
      {question.type === "multiple-choice" && question.options && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
              className={`px-4 py-3 rounded-lg border-2 text-sm text-left transition-all duration-150 disabled:cursor-not-allowed ${getOptionStyle(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* True / False */}
      {question.type === "true-false" && (
        <div className="flex flex-col sm:flex-row gap-3">
          {["True", "False"].map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
              className={`flex-1 px-6 py-3 rounded-lg border-2 text-sm font-medium transition-all duration-150 disabled:cursor-not-allowed ${getOptionStyle(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Fill blank */}
      {question.type === "fill-blank" && (
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={isAnswered ? (userAnswer ?? "") : fillInput}
            onChange={(e) => setFillInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleFillSubmit();
            }}
            disabled={isAnswered}
            placeholder="輸入答案..."
            className="flex-1 px-4 py-2.5 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-indigo-400 text-sm text-slate-800 disabled:bg-slate-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleFillSubmit}
            disabled={isAnswered || !fillInput.trim()}
            className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            提交
          </button>
        </div>
      )}

      {/* Explanation after answer */}
      {isAnswered && (
        <div
          className={`mt-5 p-4 rounded-lg text-sm leading-relaxed ${
            isCorrect
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          <p className="font-semibold mb-1">{isCorrect ? "正確！" : "錯誤"}</p>
          <p>{question.explanation}</p>
          {!isCorrect && (
            <p className="mt-2 font-medium">
              正確答案：{Array.isArray(question.answer) ? question.answer.join(" / ") : question.answer}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
