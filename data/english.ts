import { type Question } from "@/types";

export const englishQuestions: Question[] = [
  // ===== Beginner (10 題) =====
  {
    id: "english-001",
    category: "english",
    difficulty: "beginner",
    topic: "基礎時態",
    type: "multiple-choice",
    question:
      "Choose the correct sentence: She ___ to work every day by bus.",
    options: [{ label: "A", value: "go" }, { label: "B", value: "goes" }, { label: "C", value: "is going" }, { label: "D", value: "went" }],
    answer: "B",
    explanation:
      "主詞為第三人稱單數 She，描述每天例行習慣使用簡單現在式（Simple Present），動詞需加 -s，所以是 goes。go 用於複數主詞；is going 是現在進行式；went 是過去式。",
    tags: ["tense", "present-simple", "subject-verb-agreement"],
  },
  {
    id: "english-002",
    category: "english",
    difficulty: "beginner",
    topic: "基礎時態",
    type: "multiple-choice",
    question:
      "Which sentence uses the past perfect tense correctly?",
    options: [
      { label: "A", value: "She had finished her report before the meeting started." },
      { label: "B", value: "She finished her report before the meeting had started." },
      { label: "C", value: "She has finished her report before the meeting started." },
      { label: "D", value: "She was finishing her report before the meeting starts." },
    ],
    answer: "A",
    explanation:
      "過去完成式（had + p.p.）用於表示在過去某個時間點之前已完成的動作。句子中「會議開始（meeting started）」是過去，而「完成報告（finished report）」更早，所以用 had finished。選項 B 邏輯顛倒，C 用現在完成式，D 時態混亂。",
    tags: ["tense", "past-perfect", "grammar"],
  },
  {
    id: "english-003",
    category: "english",
    difficulty: "beginner",
    topic: "介系詞",
    type: "multiple-choice",
    question:
      "Choose the correct preposition: The meeting is scheduled ___ Monday morning.",
    options: [{ label: "A", value: "in" }, { label: "B", value: "at" }, { label: "C", value: "on" }, { label: "D", value: "by" }],
    answer: "C",
    explanation:
      "介系詞規則：at 用於具體時刻（at 3pm, at noon）；in 用於月份、年份、季節、一天中的時段（in the morning, in 2024）；on 用於具體日期和星期幾（on Monday, on March 5th）。Monday morning 是具體的一天，用 on。",
    tags: ["preposition", "time", "on-in-at"],
  },
  {
    id: "english-004",
    category: "english",
    difficulty: "beginner",
    topic: "冠詞",
    type: "multiple-choice",
    question:
      "Choose the correct article: He wants to become ___ engineer after graduation.",
    options: [{ label: "A", value: "a" }, { label: "B", value: "an" }, { label: "C", value: "the" }, { label: "D", value: "(no article)" }],
    answer: "B",
    explanation:
      "不定冠詞 a/an 用於第一次提及的可數名詞單數。a 用於輔音音素開頭的詞，an 用於母音音素開頭的詞。engineer 發音以母音音素 /ɛ/ 開頭，所以用 an。注意是看發音而非字母（an hour, a university）。",
    tags: ["article", "a-an", "vowel-sound"],
  },
  {
    id: "english-005",
    category: "english",
    difficulty: "beginner",
    topic: "常見詞彙選擇",
    type: "multiple-choice",
    question:
      "Choose the word that best completes the sentence: The new policy will ___ all employees, not just managers.",
    options: [{ label: "A", value: "affect" }, { label: "B", value: "effect" }, { label: "C", value: "infect" }, { label: "D", value: "reflect" }],
    answer: "A",
    explanation:
      "affect（動詞）意為「影響、作用於」，是及物動詞，常見用法 affect someone/something。effect（名詞）意為「效果、結果」（偶爾作動詞用，意為「實現」）。句中需要動詞，且語意為「影響所有員工」，所以選 affect。",
    tags: ["vocabulary", "affect-effect", "word-choice"],
  },
  {
    id: "english-006",
    category: "english",
    difficulty: "beginner",
    topic: "基礎時態",
    type: "true-false",
    question:
      "The sentence 'I have been working here since five years' is grammatically correct.",
    answer: "false",
    explanation:
      "此句語法錯誤。since 後面接具體時間點（since 2020, since Monday），而 five years 是一段時間，應使用 for（I have been working here for five years）。since 接時間點，for 接時間長度，是常見混淆點。",
    tags: ["tense", "since-for", "present-perfect-continuous"],
  },
  {
    id: "english-007",
    category: "english",
    difficulty: "beginner",
    topic: "常見詞彙選擇",
    type: "multiple-choice",
    question:
      "Which word correctly fills the blank? The developer ___ the bug within two hours.",
    options: [{ label: "A", value: "fixed" }, { label: "B", value: "fixd" }, { label: "C", value: "have fixed" }, { label: "D", value: "had been fixing" }],
    answer: "A",
    explanation:
      "within two hours 表示在兩小時之內完成，描述過去已完成的動作，用簡單過去式（Simple Past）fixed。have fixed 是現在完成式（需配合現在時間參考）；had been fixing 是過去完成進行式（強調持續過程）。",
    tags: ["tense", "simple-past", "vocabulary"],
  },
  {
    id: "english-008",
    category: "english",
    difficulty: "beginner",
    topic: "介系詞",
    type: "fill-blank",
    question:
      "Complete the sentence with the correct preposition: She is responsible ___ managing the project timeline.",
    answer: "for",
    explanation:
      "be responsible for 是固定搭配（collocation），意為「負責某事」。其他常見搭配：interested in（對…感興趣）、good at（擅長）、afraid of（害怕）。介系詞搭配需熟記，通常無法從邏輯推導。",
    tags: ["preposition", "collocation", "responsible-for"],
  },
  {
    id: "english-009",
    category: "english",
    difficulty: "beginner",
    topic: "冠詞",
    type: "multiple-choice",
    question:
      "Choose the correct sentence regarding article usage:",
    options: [
      { label: "A", value: "She plays the piano every day." },
      { label: "B", value: "She plays a piano every day." },
      { label: "C", value: "She plays piano every day." },
      { label: "D", value: "She plays an piano every day." },
    ],
    answer: "A",
    explanation:
      "樂器名稱前加定冠詞 the 是英語慣例：play the piano, play the guitar, play the violin。這個用法的 the 不是指特定的那台鋼琴，而是約定俗成的用法。體育運動則不加冠詞：play basketball, play tennis。",
    tags: ["article", "the", "musical-instruments"],
  },
  {
    id: "english-010",
    category: "english",
    difficulty: "beginner",
    topic: "常見詞彙選擇",
    type: "multiple-choice",
    question:
      "Choose the correct word: Please ___ the attached document for your reference.",
    options: [{ label: "A", value: "see" }, { label: "B", value: "refer to" }, { label: "C", value: "look" }, { label: "D", value: "watch" }],
    answer: "B",
    explanation:
      "refer to（參閱、查閱）是商業書信常用語，適合「請查閱附件」的情境。see 通常用於一般性「看見」；look 需要接 at（look at）；watch 用於動態影像或事物。for your reference（供您參考）也是商業書信常見固定用語。",
    tags: ["vocabulary", "business-english", "refer-to"],
  },

  // ===== Intermediate (10 題) =====
  {
    id: "english-011",
    category: "english",
    difficulty: "intermediate",
    topic: "科技詞彙",
    type: "multiple-choice",
    question:
      "In software development, what does 'deprecated' mean when used to describe a function or API?",
    options: [
      { label: "A", value: "The function has a critical security vulnerability." },
      { label: "B", value: "The function is discouraged from use and may be removed in future versions." },
      { label: "C", value: "The function is newly introduced and experimental." },
      { label: "D", value: "The function requires administrator privileges." },
    ],
    answer: "B",
    explanation:
      "deprecated（已棄用）指某個功能、API 或語法仍可使用，但官方不建議繼續使用，並可能在未來版本中移除。通常會附上替代方案。相關詞彙：obsolete（已廢棄，完全不應使用）、legacy（遺留程式碼）。",
    tags: ["tech-vocabulary", "deprecated", "api"],
  },
  {
    id: "english-012",
    category: "english",
    difficulty: "intermediate",
    topic: "科技詞彙",
    type: "multiple-choice",
    question:
      "What does the term 'latency' refer to in the context of network communication?",
    options: [
      { label: "A", value: "The maximum data transfer rate of a network" },
      { label: "B", value: "The amount of data lost during transmission" },
      { label: "C", value: "The time delay between sending a request and receiving a response" },
      { label: "D", value: "The number of simultaneous connections a server can handle" },
    ],
    answer: "C",
    explanation:
      "latency（延遲）是指從發送請求到收到回應的時間延遲，通常以毫秒（ms）衡量。相關詞彙：bandwidth（頻寬，單位時間內可傳輸的資料量）、throughput（吞吐量，實際資料傳輸速率）、packet loss（封包遺失）。",
    tags: ["tech-vocabulary", "latency", "network"],
  },
  {
    id: "english-013",
    category: "english",
    difficulty: "intermediate",
    topic: "句型改錯",
    type: "multiple-choice",
    question:
      "Identify the grammatical error in this sentence: 'The team have been worked on this feature since last month.'",
    options: [
      { label: "A", value: "'team' should be 'teams'" },
      { label: "B", value: "'have been worked' should be 'has been working'" },
      { label: "C", value: "'since' should be 'for'" },
      { label: "D", value: "'this' should be 'these'" },
    ],
    answer: "B",
    explanation:
      "現在完成進行式的結構是 have/has + been + V-ing。have been worked 使用了被動語態（have been + p.p.），但此句語意是主動（團隊主動在做），應改為 has been working。另外 team 在美式英語視為單數，用 has。",
    tags: ["grammar", "present-perfect-continuous", "error-correction"],
  },
  {
    id: "english-014",
    category: "english",
    difficulty: "intermediate",
    topic: "段落閱讀",
    type: "multiple-choice",
    question:
      "Read the passage and answer: 'Microservices architecture decomposes an application into small, independently deployable services. Each service runs its own process and communicates through APIs. This approach improves scalability but increases operational complexity.' — What is the main DISADVANTAGE mentioned?",
    options: [
      { label: "A", value: "Reduced scalability" },
      { label: "B", value: "Difficulty in API communication" },
      { label: "C", value: "Increased operational complexity" },
      { label: "D", value: "Services cannot be deployed independently" },
    ],
    answer: "C",
    explanation:
      "文章最後一句 'increases operational complexity'（增加運維複雜度）是提到的缺點。文章明確說 improves scalability（改善擴展性）所以 A 錯；API 通訊是特性不是缺點；可獨立部署是優點。閱讀理解關鍵字：but（轉折）通常後接缺點或限制。",
    tags: ["reading-comprehension", "microservices", "tech-vocabulary"],
  },
  {
    id: "english-015",
    category: "english",
    difficulty: "intermediate",
    topic: "科技詞彙",
    type: "fill-blank",
    question:
      "In version control, a '_____' is an independent line of development that allows developers to work on features without affecting the main codebase.",
    answer: "branch",
    explanation:
      "branch（分支）是版本控制系統（如 Git）中的核心概念，允許開發者在不影響主程式碼（main/master）的情況下進行開發。相關詞彙：merge（合併分支）、commit（提交變更）、pull request（合併請求）。",
    tags: ["tech-vocabulary", "git", "branch", "version-control"],
  },
  {
    id: "english-016",
    category: "english",
    difficulty: "intermediate",
    topic: "句型改錯",
    type: "multiple-choice",
    question:
      "Which sentence uses 'which' and 'that' correctly?",
    options: [
      { label: "A", value: "The server which crashed yesterday has been restored." },
      { label: "B", value: "The server that I mentioned, which is located in Singapore, handles API requests." },
      { label: "C", value: "The server which is located in Singapore handles API requests." },
      { label: "D", value: "The server that, which was old, was replaced." },
    ],
    answer: "B",
    explanation:
      "that 引導限定性關係子句（defining/restrictive clause，不用逗號）；which 引導非限定性關係子句（non-defining clause，需用逗號）。B 句中 'that I mentioned' 是限定（指明哪台），'which is located in Singapore' 加了逗號是附加說明，兩者使用正確。",
    tags: ["grammar", "relative-clause", "that-which"],
  },
  {
    id: "english-017",
    category: "english",
    difficulty: "intermediate",
    topic: "科技詞彙",
    type: "true-false",
    question:
      "In software engineering, 'refactoring' means adding new features to existing code while keeping the external behavior unchanged.",
    answer: "false",
    explanation:
      "Refactoring（重構）是在不改變外部行為（external behavior）的前提下，改善程式碼內部結構的過程。目的是提升可讀性、降低技術債，而非新增功能。新增功能是 feature development，兩者不應混為一談。",
    tags: ["tech-vocabulary", "refactoring", "software-engineering"],
  },
  {
    id: "english-018",
    category: "english",
    difficulty: "intermediate",
    topic: "段落閱讀",
    type: "multiple-choice",
    question:
      "Read and answer: 'A REST API uses HTTP methods to perform CRUD operations: GET retrieves data, POST creates new resources, PUT updates existing resources, and DELETE removes them. Each resource is identified by a unique URL endpoint.' — According to the passage, which HTTP method is used to CREATE a new resource?",
    options: [{ label: "A", value: "GET" }, { label: "B", value: "PUT" }, { label: "C", value: "POST" }, { label: "D", value: "DELETE" }],
    answer: "C",
    explanation:
      "文章明確說明 POST creates new resources（POST 建立新資源）。GET 取得資料；PUT 更新現有資源；DELETE 刪除資源。CRUD 對應：Create=POST, Read=GET, Update=PUT/PATCH, Delete=DELETE，是 REST API 的基礎概念。",
    tags: ["reading-comprehension", "rest-api", "http-methods"],
  },
  {
    id: "english-019",
    category: "english",
    difficulty: "intermediate",
    topic: "句型改錯",
    type: "fill-blank",
    question:
      "Correct the error: 'Despite of the bug, the system ran smoothly.' The correct preposition after 'despite' is: despite ___ the bug (remove 'of' and add what word, or just 'despite'?)",
    answer: "despite",
    explanation:
      "despite 是介系詞，直接接名詞或名詞片語，不需要 of（despite the bug, despite the difficulty）。'In spite of' 是正確的三字介系詞（in spite of the bug）。兩者意思相同，但 despite 後直接接名詞，in spite of 後接名詞。",
    tags: ["grammar", "preposition", "despite", "error-correction"],
  },
  {
    id: "english-020",
    category: "english",
    difficulty: "intermediate",
    topic: "科技詞彙",
    type: "multiple-choice",
    question:
      "What does 'scalability' mean in the context of software systems?",
    options: [
      { label: "A", value: "The ability to fix bugs quickly" },
      { label: "B", value: "The ability of a system to handle increasing load by adding resources" },
      { label: "C", value: "The security level of a system" },
      { label: "D", value: "The ease of reading the source code" },
    ],
    answer: "B",
    explanation:
      "scalability（可擴展性）指系統在負載增加時，透過增加資源（硬體、伺服器、節點）維持效能的能力。分為垂直擴展（vertical scaling，增強單機）和水平擴展（horizontal scaling，增加節點）。這是系統設計的核心考量之一。",
    tags: ["tech-vocabulary", "scalability", "system-design"],
  },

  // ===== Advanced (10 題) =====
  {
    id: "english-021",
    category: "english",
    difficulty: "advanced",
    topic: "複雜閱讀理解",
    type: "multiple-choice",
    question:
      "Read the passage and answer: 'The CAP theorem states that a distributed system cannot simultaneously guarantee all three of the following: Consistency (every read receives the most recent write), Availability (every request receives a response), and Partition Tolerance (the system continues operating despite network partitions). In practice, since network partitions are inevitable, distributed systems must choose between consistency and availability.' — What does the author imply by saying 'network partitions are inevitable'?",
    options: [
      { label: "A", value: "Network partitions can be completely prevented with proper infrastructure." },
      { label: "B", value: "Developers should prioritize availability over consistency in all cases." },
      { label: "C", value: "Real-world distributed systems must accept network failures and make trade-offs." },
      { label: "D", value: "CAP theorem only applies to systems without proper monitoring." },
    ],
    answer: "C",
    explanation:
      "作者說「網路分區是不可避免的」，隱含的意思是在現實世界中，分散式系統必須接受網路故障的可能性，並在一致性（Consistency）和可用性（Availability）之間做取捨。A 與「inevitable」相反；B 過度推論；D 文章未提及。",
    tags: ["reading-comprehension", "CAP-theorem", "distributed-systems"],
  },
  {
    id: "english-022",
    category: "english",
    difficulty: "advanced",
    topic: "學術英文用語",
    type: "multiple-choice",
    question:
      "Which word best replaces 'use' in a formal technical document? 'We ___ a binary search algorithm to improve lookup efficiency.'",
    options: [{ label: "A", value: "use" }, { label: "B", value: "employ" }, { label: "C", value: "do" }, { label: "D", value: "make" }],
    answer: "B",
    explanation:
      "employ（採用、運用）比 use 更正式，適合技術文件、學術論文。其他正式替換詞：utilize（利用）、implement（實作）、leverage（善用）、adopt（採用）。技術寫作中避免過於口語的詞彙，use 雖正確但較非正式。",
    tags: ["academic-english", "formal-writing", "vocabulary"],
  },
  {
    id: "english-023",
    category: "english",
    difficulty: "advanced",
    topic: "複雜閱讀理解",
    type: "multiple-choice",
    question:
      "Read and infer: 'Legacy codebases often suffer from tight coupling, where components are heavily interdependent. This makes it difficult to modify one component without risking unintended side effects in others. Modern software design advocates for loose coupling through dependency injection and interface-based programming.' — What is the author's implicit recommendation for legacy code?",
    options: [
      { label: "A", value: "Rewrite all legacy code immediately." },
      { label: "B", value: "Introduce dependency injection and interface-based design to reduce interdependence." },
      { label: "C", value: "Avoid modifying legacy codebases entirely." },
      { label: "D", value: "Use tight coupling for better performance." },
    ],
    answer: "B",
    explanation:
      "作者描述緊耦合（tight coupling）的問題，並提及現代軟體設計透過依賴注入（dependency injection）和介面導向程式設計（interface-based programming）倡導鬆耦合（loose coupling）。隱含建議是在遺留程式碼中引入這些技術，而非立即重寫（A）或完全不動（C）。",
    tags: ["reading-comprehension", "software-design", "legacy-code"],
  },
  {
    id: "english-024",
    category: "english",
    difficulty: "advanced",
    topic: "商業英文用語",
    type: "multiple-choice",
    question:
      "In a professional email, which phrase best expresses that a deadline has passed and you need an update?",
    options: [
      { label: "A", value: "'Why haven't you finished yet?'" },
      { label: "B", value: "'I wanted to follow up on the status of the deliverable that was due last Friday.'" },
      { label: "C", value: "'You are late. Send me the work.'" },
      { label: "D", value: "'Please hurry up with your work.'" },
    ],
    answer: "B",
    explanation:
      "B 使用了商業書信標準語：follow up（追蹤進度）、status（狀態）、deliverable（可交付成果）、due（到期）。語氣禮貌而明確。A、C、D 語氣過於直接或不禮貌，在專業場合不適當。follow up 是商業溝通最常用的動詞之一。",
    tags: ["business-english", "email-writing", "professional-communication"],
  },
  {
    id: "english-025",
    category: "english",
    difficulty: "advanced",
    topic: "軟體英文文件閱讀",
    type: "multiple-choice",
    question:
      "In API documentation, what does it mean when a parameter is marked as 'optional with a default value of null'?",
    options: [
      { label: "A", value: "The parameter must always be provided." },
      { label: "B", value: "The parameter can be omitted; if not provided, the system treats it as null." },
      { label: "C", value: "The parameter only accepts null as its value." },
      { label: "D", value: "The parameter will cause an error if set to null." },
    ],
    answer: "B",
    explanation:
      "API 文件中 'optional with a default value of null' 表示：此參數可以不提供（optional = 非必填），若省略則預設值為 null。這是 API 文件的標準描述方式。相對地，'required' 表示必須提供，否則 API 呼叫會失敗。",
    tags: ["api-documentation", "optional-parameter", "technical-reading"],
  },
  {
    id: "english-026",
    category: "english",
    difficulty: "advanced",
    topic: "複雜閱讀理解",
    type: "true-false",
    question:
      "Based on this statement: 'A higher cache hit rate invariably leads to better system performance.' This statement is absolutely true in all scenarios.",
    answer: "false",
    explanation:
      "雖然高快取命中率（cache hit rate）通常能提升效能，但「invariably（一定、始終）」使此陳述過於絕對。例如：快取儲存過時資料（stale data）時，高命中率反而導致讀到錯誤資訊；快取大小過大消耗記憶體也可能影響整體效能。閱讀理解中注意絕對詞（always, never, invariably）通常指向錯誤答案。",
    tags: ["reading-comprehension", "cache", "critical-thinking"],
  },
  {
    id: "english-027",
    category: "english",
    difficulty: "advanced",
    topic: "學術英文用語",
    type: "multiple-choice",
    question:
      "Which sentence best demonstrates correct use of the subjunctive mood in a formal recommendation?",
    options: [
      { label: "A", value: "'It is important that the system updates itself automatically.'" },
      { label: "B", value: "'It is important that the system update itself automatically.'" },
      { label: "C", value: "'It is important that the system would update itself automatically.'" },
      { label: "D", value: "'It is important that the system is updating itself automatically.'" },
    ],
    answer: "B",
    explanation:
      "虛擬語氣（subjunctive mood）用於 it is important/necessary/essential/recommended that 後面的 that 子句中，動詞使用原形（base form），不加 -s/-es，也不用 would/would be。B 使用 'update'（原形）是正確的虛擬語氣用法，在正式學術和法律英文中很常見。",
    tags: ["subjunctive-mood", "formal-english", "grammar"],
  },
  {
    id: "english-028",
    category: "english",
    difficulty: "advanced",
    topic: "軟體英文文件閱讀",
    type: "fill-blank",
    question:
      "In a Git documentation: 'Use `git rebase` to ___ commits onto a new base commit, rewriting history for a cleaner project timeline.' The missing word means 'apply again on top of'.",
    answer: "replay",
    explanation:
      "git rebase 的核心操作是將一連串的 commits 'replay'（重新播放/應用）到新的基礎 commit 上。這與 merge 不同，rebase 會重寫提交歷史，產生更線性的歷史紀錄。理解 Git 文件中的動詞（rebase, cherry-pick, squash, amend）對閱讀技術文件很重要。",
    tags: ["git", "rebase", "technical-documentation"],
  },
  {
    id: "english-029",
    category: "english",
    difficulty: "advanced",
    topic: "商業英文用語",
    type: "multiple-choice",
    question:
      "In a technical proposal, which phrase most professionally conveys that a solution has trade-offs?",
    options: [
      { label: "A", value: "'This solution is not perfect.'" },
      { label: "B", value: "'This approach involves certain trade-offs between performance and maintainability that warrant careful consideration.'" },
      { label: "C", value: "'This solution might have some problems.'" },
      { label: "D", value: "'Be careful because this solution could fail.'" },
    ],
    answer: "B",
    explanation:
      "B 使用了專業的技術提案語言：trade-offs（取捨）、warrant careful consideration（值得仔細考量）。這種措辭承認限制但保持客觀專業。A、C、D 過於模糊或非正式，缺乏具體性。技術提案應明確指出取捨點，幫助讀者做出知情決策。",
    tags: ["business-english", "technical-proposal", "professional-writing"],
  },
  {
    id: "english-030",
    category: "english",
    difficulty: "advanced",
    topic: "軟體英文文件閱讀",
    type: "multiple-choice",
    question:
      "In a library's changelog: 'This release introduces breaking changes to the public API. Consumers must update their integration code accordingly.' What does 'breaking changes' mean?",
    options: [
      { label: "A", value: "Changes that fix critical bugs" },
      { label: "B", value: "Changes that improve performance significantly" },
      { label: "C", value: "Changes that are incompatible with previous versions and require code updates" },
      { label: "D", value: "Changes that add new optional features" },
    ],
    answer: "C",
    explanation:
      "Breaking changes（重大變更/破壞性變更）指與前一版本不相容的 API 變更，使用舊版本的程式碼在升級後需要修改才能繼續運作。相對地，non-breaking changes 或 backward-compatible changes 不影響現有程式碼。這是語義版本控制（Semantic Versioning / SemVer）中主版本號（major version）升級的原因。",
    tags: ["changelog", "breaking-changes", "api", "semver"],
  },
];
