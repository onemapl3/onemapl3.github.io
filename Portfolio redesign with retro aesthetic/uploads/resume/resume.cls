%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Author: Vignesh Iyer                                 %
% MS CSE ASU                                           %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{resume}[2023/03/18 v0.1 Resume class]

\LoadClass[10pt,letterpaper]{article} % Font size and paper type

% set document margins
\usepackage[left=0.45in,top=0.3in,right=0.45in,bottom=0.3in]{geometry}
\usepackage[parfill]{parskip} % Remove paragraph indentation

\usepackage{keycommand}
\usepackage{xstring}
\usepackage{hyperref}
\hypersetup{
    colorlinks=true,
    linkcolor=blue,
    urlcolor=black,
}
%\usepackage[normalem]{ulem} % for underlining links

% Load the fontspec package to set the font
\usepackage[scaled]{helvet} % Load the Helvetica font
\renewcommand\familydefault{\sfdefault} % Set the default font family to sans-serif
\usepackage[T1]{fontenc} % Use the T1 font encoding to ensure proper character rendering

\pagestyle{empty}

\def \separator {\textbf{\Large |}}

\newcommand\printNameTitle[1]{%
    \begingroup
    \vspace{-1em}
    \hfill{\MakeUppercase{\Huge\bfseries #1}}\hfill
    \break
    \vspace{-1em}
    \endgroup
}

\newcommand{\printContactInformation}{%
  \vspace{-0.3em} % remove vertical space above
  \begin{center}
    \commandkey{phone}{ \separator\ }\email{\commandkey{email}}{ \separator\ }\profilelink{\commandkey{linkedin}}{ \separator\ }\profilelink{\commandkey{github}}
  \end{center}
}

\newcommand{\email}[1]{\href{mailto:#1}{#1}}
\newcommand{\profilelink}[1]{\href{https://#1}{#1}}
\newcommand{\wechatlink}[1]{\href{https://u.wechat.com/EPxrU5J6pT6K9-d0CXxNcd8}{#1}}
%\newcommand{\profilelink}[1]{\href{https://#1}{\textcolor{blue}{\uline{#1}}}}

\newkeycommand{\introduction}[fullname,email,phone,linkedin, github]{%github address
    \printNameTitle{\commandkey{fullname}}
    \printContactInformation
}

\newcommand{\summary}[1]{
    \textbf{\MakeUppercase{Summary}}
    \vspace{0.4em}
    \hrule
    \vspace{-0.3em}
    #1
}
\newkeycommand{\summaryItem}[category, desc]{
    {\bf \commandkey{category}:} {\commandkey{desc}}
}

\newcommand{\education}{
    \textbf{\MakeUppercase{Education}}
    \vspace{0.4em}
    \hrule
    \vspace{-0.3em}
}

\newkeycommand{\graduateEducationItem}[university,college,program,graduation,grade,coursework]{
    {\bf \commandkey{university}} \hfill {\commandkey{graduation}} \\
    {\commandkey{program}} \hfill \ifcommandkey{grade}{\commandkey{grade}}{} \\
    \ifcommandkey{coursework}{Research Area: \commandkey{coursework}}{}
    %\ifcommandkey{college}{\commandkey{college}}{} \\
     % \vspace{-1em} % remove extra space
}

\newkeycommand{\undergraduateEducationItem}[university,college,program,graduation,grade,coursework]{
    {\bf \commandkey{university}} \hfill {\commandkey{graduation}} \\
    {\commandkey{program}} \hfill \ifcommandkey{grade}{\commandkey{grade}}{} \\
    \ifcommandkey{coursework}{Relevant Coursework: \commandkey{coursework}}{}
  
}

\newcommand{\skills}{
    \textbf{\MakeUppercase{Technical Skills}}
    \vspace{0.4em}
    \hrule
    \vspace{-0.3em}
}

\newkeycommand{\skillItem}[category, skills]{
    {\bf \commandkey{category}:} {\commandkey{skills}}
}

\newenvironment{workSection}[1]{
  \textbf{\MakeUppercase{#1}}
  \vspace{0.4em}
  \hrule
  \vspace{-0.3em}
  \begin{list}{}{ % List for each individual item in the section
    \setlength{\leftmargin}{0em} % Margin within the section
  }
  \item[]
}{
  \end{list}
}

\newkeycommand{\experienceItem}[company, position, location, duration]{
    \textbf{\commandkey{company}}\hfill{\commandkey{duration}}\\
    \commandkey{position}, {\commandkey{location}}
}
\newkeycommand{\customItem}[title, duration, keyHighlight]{
    \textbf{\commandkey{title}} \hfill {\commandkey{duration}} \\
    \ifcommandkey{keyHighlight}{\commandkey{keyHighlight}}{}
}
