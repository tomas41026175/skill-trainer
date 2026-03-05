import { type Question } from "@/types";

export const csharpQuestions: Question[] = [
  // ===== Beginner (10 題) =====
  {
    id: "csharp-001",
    category: "csharp",
    difficulty: "beginner",
    topic: "值型別 vs 參考型別",
    type: "multiple-choice",
    question: "以下哪個是 C# 的值型別（Value Type）？",
    options: [{ label: "A", value: "string" }, { label: "B", value: "int" }, { label: "C", value: "object" }, { label: "D", value: "List<T>" }],
    answer: "B",
    explanation:
      "int（以及 double、bool、struct、enum）是值型別，儲存在堆疊（Stack）上，賦值時複製整個值。string、object、class、陣列等是參考型別，儲存在堆積（Heap）上，變數持有的是參考（指標）。",
    tags: ["value-type", "reference-type", "stack", "heap"],
  },
  {
    id: "csharp-002",
    category: "csharp",
    difficulty: "beginner",
    topic: "值型別 vs 參考型別",
    type: "true-false",
    question:
      "在 C# 中，struct 是參考型別，因此賦值給另一個變數時，兩個變數指向同一個物件。",
    answer: "false",
    explanation:
      "struct 是值型別，賦值時會複製整個結構體的內容，兩個變數是獨立的副本，修改其中一個不影響另一個。只有 class 才是參考型別。",
    tags: ["struct", "value-type", "copy"],
  },
  {
    id: "csharp-003",
    category: "csharp",
    difficulty: "beginner",
    topic: "OOP 基礎",
    type: "multiple-choice",
    question: "C# 中，子類別（Derived Class）要呼叫父類別建構子，應使用哪個關鍵字？",
    options: [{ label: "A", value: "super()" }, { label: "B", value: "parent()" }, { label: "C", value: "base()" }, { label: "D", value: "this()" }],
    answer: "C",
    explanation:
      "C# 使用 base 關鍵字呼叫父類別的成員，包括 base() 呼叫父類別建構子，或 base.Method() 呼叫父類別方法。Java/JavaScript 等語言使用 super。",
    tags: ["inheritance", "base", "constructor", "oop"],
  },
  {
    id: "csharp-004",
    category: "csharp",
    difficulty: "beginner",
    topic: "OOP 基礎",
    type: "fill-blank",
    question:
      "C# 中，若希望子類別可以覆寫父類別的方法，父類別方法需加上 ___ 修飾詞，子類別覆寫時需加上 override。",
    answer: "virtual",
    explanation:
      "父類別方法標記 virtual 表示允許子類別覆寫；子類別使用 override 覆寫該方法。若父類別方法未標記 virtual，子類別只能用 new 關鍵字隱藏（hide）而非覆寫（override）。",
    tags: ["virtual", "override", "polymorphism", "oop"],
  },
  {
    id: "csharp-005",
    category: "csharp",
    difficulty: "beginner",
    topic: "OOP 基礎",
    type: "multiple-choice",
    question: "C# 中，類別的存取修飾詞 protected 代表什麼？",
    options: [
      { label: "A", value: "只有同一個類別內可存取" },
      { label: "B", value: "同一個組件（Assembly）內可存取" },
      { label: "C", value: "只有該類別及其子類別可存取" },
      { label: "D", value: "所有地方都可存取" },
    ],
    answer: "C",
    explanation:
      "protected 成員只有宣告它的類別本身及其子類別（無論是否同一組件）可存取。private 只限同類別；internal 限同組件；public 全部可存取。",
    tags: ["access-modifier", "protected", "oop"],
  },
  {
    id: "csharp-006",
    category: "csharp",
    difficulty: "beginner",
    topic: "例外處理",
    type: "multiple-choice",
    question: "C# 的 try-catch-finally 中，finally 區塊何時執行？",
    options: [
      { label: "A", value: "只有在發生例外時" },
      { label: "B", value: "只有在沒有例外時" },
      { label: "C", value: "無論是否發生例外，一定執行" },
      { label: "D", value: "只有在 catch 捕捉到例外後" },
    ],
    answer: "C",
    explanation:
      "finally 區塊無論 try 是否拋出例外，也無論 catch 是否有匹配的型別，都一定會執行。通常用來釋放資源（如關閉資料庫連線、檔案），但現代 C# 通常使用 using 陳述式更方便。",
    tags: ["exception", "try-catch", "finally"],
  },
  {
    id: "csharp-007",
    category: "csharp",
    difficulty: "beginner",
    topic: "例外處理",
    type: "true-false",
    question:
      "在 C# 中，catch(Exception ex) 可以捕捉所有類型的例外，包括 OutOfMemoryException。",
    answer: "false",
    explanation:
      "某些嚴重的系統例外（如 StackOverflowException、ExecutionEngineException）無法被 catch 捕捉，CLR 會直接終止行程。OutOfMemoryException 技術上可以捕捉，但實際上記憶體不足時通常很難做有意義的處理。",
    tags: ["exception", "catch", "OutOfMemoryException"],
  },
  {
    id: "csharp-008",
    category: "csharp",
    difficulty: "beginner",
    topic: "List / Dictionary",
    type: "multiple-choice",
    question: "C# 中，Dictionary<string, int> myDict 要取得 key 為 \"age\" 的值，以下哪個方式最安全（不會拋出 KeyNotFoundException）？",
    options: [
      { label: "A", value: "myDict[\"age\"]" },
      { label: "B", value: "myDict.Get(\"age\")" },
      { label: "C", value: "myDict.TryGetValue(\"age\", out var value)" },
      { label: "D", value: "myDict.Find(\"age\")" },
    ],
    answer: "C",
    explanation:
      "TryGetValue 在 key 不存在時回傳 false 而不拋出例外，是安全的存取方式。myDict[\"age\"] 在 key 不存在時會拋出 KeyNotFoundException。實務上應優先使用 TryGetValue 或先用 ContainsKey 檢查。",
    tags: ["dictionary", "TryGetValue", "collection"],
  },
  {
    id: "csharp-009",
    category: "csharp",
    difficulty: "beginner",
    topic: "List / Dictionary",
    type: "fill-blank",
    question:
      "C# 的 List<T> 要移除所有符合條件的元素，可使用 list.___(predicate) 方法。",
    answer: "RemoveAll",
    explanation:
      "List<T>.RemoveAll(Predicate<T> match) 移除所有符合條件的元素並回傳移除的數量。例如 list.RemoveAll(x => x < 0) 移除所有負數元素。",
    tags: ["list", "RemoveAll", "collection"],
  },
  {
    id: "csharp-010",
    category: "csharp",
    difficulty: "beginner",
    topic: "OOP 基礎",
    type: "multiple-choice",
    question: "C# 中，sealed 關鍵字用於類別時代表什麼？",
    options: [
      { label: "A", value: "類別的所有欄位都是唯讀" },
      { label: "B", value: "禁止其他類別繼承此類別" },
      { label: "C", value: "類別只能有一個實例（Singleton）" },
      { label: "D", value: "類別的方法不能被覆寫" },
    ],
    answer: "B",
    explanation:
      "sealed class 禁止繼承，嘗試繼承 sealed class 會造成編譯錯誤。sealed 也可用於方法（需配合 override），防止子類別再度覆寫該方法。",
    tags: ["sealed", "inheritance", "class"],
  },

  // ===== Intermediate (10 題) =====
  {
    id: "csharp-011",
    category: "csharp",
    difficulty: "intermediate",
    topic: "LINQ",
    type: "multiple-choice",
    question: "以下 LINQ 查詢何者正確地將 List<int> numbers 中大於 10 的數字取出並排序？",
    options: [
      { label: "A", value: "numbers.Filter(n => n > 10).Sort()" },
      { label: "B", value: "numbers.Where(n => n > 10).OrderBy(n => n)" },
      { label: "C", value: "numbers.Select(n => n > 10).OrderBy(n => n)" },
      { label: "D", value: "numbers.Query(n > 10).Sort(n => n)" },
    ],
    answer: "B",
    explanation:
      "LINQ 的 Where() 用於過濾（相當於 filter），Select() 用於投影轉換（相當於 map）。OrderBy() 升冪排序，OrderByDescending() 降冪排序。正確用法是 Where() 過濾後 OrderBy() 排序。",
    tags: ["linq", "where", "orderby", "filter"],
  },
  {
    id: "csharp-012",
    category: "csharp",
    difficulty: "intermediate",
    topic: "LINQ",
    type: "multiple-choice",
    question: "LINQ 的 GroupBy 回傳的型別是什麼？",
    options: [
      { label: "A", value: "IEnumerable<T>" },
      { label: "B", value: "IEnumerable<IGrouping<TKey, TElement>>" },
      { label: "C", value: "Dictionary<TKey, List<TElement>>" },
      { label: "D", value: "ILookup<TKey, TElement>" },
    ],
    answer: "B",
    explanation:
      "GroupBy 回傳 IEnumerable<IGrouping<TKey, TElement>>，每個 IGrouping 有 Key 屬性（分組鍵）及包含該分組元素的序列。若需要 Dictionary，可搭配 ToDictionary() 或使用 ToLookup()。",
    tags: ["linq", "groupby", "IGrouping"],
  },
  {
    id: "csharp-013",
    category: "csharp",
    difficulty: "intermediate",
    topic: "LINQ",
    type: "true-false",
    question: "LINQ 查詢使用延遲執行（Deferred Execution），查詢定義時不立即執行，而是在枚舉（enumerate）時才執行。",
    answer: "true",
    explanation:
      "大多數 LINQ 方法（如 Where、Select、OrderBy）採延遲執行，只有在 foreach 迭代或呼叫 ToList()、ToArray()、Count()、First() 等終結方法時才真正執行查詢。這在效能優化時非常重要。",
    tags: ["linq", "deferred-execution", "lazy-evaluation"],
  },
  {
    id: "csharp-014",
    category: "csharp",
    difficulty: "intermediate",
    topic: "泛型",
    type: "multiple-choice",
    question: "C# 泛型約束 where T : class 的意思是？",
    options: [
      { label: "A", value: "T 必須是 string 型別" },
      { label: "B", value: "T 必須是參考型別（class）" },
      { label: "C", value: "T 必須實作 IClass 介面" },
      { label: "D", value: "T 必須有無參數建構子" },
    ],
    answer: "B",
    explanation:
      "where T : class 約束 T 必須是參考型別（任何 class，包括 string、自訂 class 等）。where T : struct 約束 T 必須是值型別。where T : new() 約束 T 必須有公開的無參數建構子。",
    tags: ["generics", "constraints", "where"],
  },
  {
    id: "csharp-015",
    category: "csharp",
    difficulty: "intermediate",
    topic: "泛型",
    type: "fill-blank",
    question:
      "泛型方法 T Max<T>(T a, T b) where T : ___ 中，這個約束確保 T 型別可以使用比較運算子（>、<）。",
    answer: "IComparable<T>",
    explanation:
      "IComparable<T> 介面定義了 CompareTo() 方法，讓型別支援比較。約束 where T : IComparable<T> 確保可以呼叫 a.CompareTo(b) 來比較大小，是實作泛型比較方法的常見模式。",
    tags: ["generics", "IComparable", "constraints"],
  },
  {
    id: "csharp-016",
    category: "csharp",
    difficulty: "intermediate",
    topic: "interface vs abstract class",
    type: "multiple-choice",
    question: "C# 中，interface 與 abstract class 最關鍵的差異是？",
    options: [
      { label: "A", value: "interface 效能比 abstract class 好" },
      { label: "B", value: "一個類別可以實作多個 interface，但只能繼承一個 abstract class" },
      { label: "C", value: "abstract class 不能有方法實作，interface 可以" },
      { label: "D", value: "interface 只能用於 public 成員" },
    ],
    answer: "B",
    explanation:
      "C# 不支援多重類別繼承，但可以實作多個 interface。C# 8+ 的 interface 也支援 default implementation（預設實作）。abstract class 可以包含已實作的方法、欄位、建構子等，interface 傳統上只定義合約。",
    tags: ["interface", "abstract-class", "multiple-inheritance"],
  },
  {
    id: "csharp-017",
    category: "csharp",
    difficulty: "intermediate",
    topic: "interface vs abstract class",
    type: "true-false",
    question:
      "C# 8.0 之後，interface 可以包含有實作的方法（default interface methods），但不能包含實例欄位（instance fields）。",
    answer: "true",
    explanation:
      "C# 8.0 引入 default interface methods，介面可以有預設實作，讓介面新增方法而不破壞現有實作者。但介面仍然不能宣告實例欄位（instance fields），只能有靜態欄位。",
    tags: ["interface", "default-methods", "csharp-8"],
  },
  {
    id: "csharp-018",
    category: "csharp",
    difficulty: "intermediate",
    topic: "async / await",
    type: "multiple-choice",
    question: "C# 中，async void 與 async Task 的主要差異是？",
    options: [
      { label: "A", value: "async void 執行較快" },
      { label: "B", value: "async void 拋出的例外無法被呼叫方 catch，且不可被 await" },
      { label: "C", value: "async Task 只能在控制器（Controller）中使用" },
      { label: "D", value: "async void 會自動 ConfigureAwait(false)" },
    ],
    answer: "B",
    explanation:
      "async void 的例外會直接拋到 SynchronizationContext，呼叫方無法用 try-catch 捕捉，也無法 await。應避免使用 async void，除了事件處理器（event handler）這個特殊情境以外，一律使用 async Task 或 async Task<T>。",
    tags: ["async", "await", "async-void", "task"],
  },
  {
    id: "csharp-019",
    category: "csharp",
    difficulty: "intermediate",
    topic: "async / await",
    type: "fill-blank",
    question:
      "在非 UI 情境（如 ASP.NET Core）的 async 方法中，通常建議在 await 後加上 .ConfigureAwait(___) 以避免不必要的 context 切換。",
    answer: "false",
    explanation:
      "ConfigureAwait(false) 告訴執行時不需要回到原始的 SynchronizationContext，可以在任何執行緒繼續執行，在程式庫程式碼中能避免 deadlock 並提升效能。在 ASP.NET Core 中通常不需要，因為它沒有 SynchronizationContext，但加上也無害。",
    tags: ["async", "ConfigureAwait", "SynchronizationContext"],
  },
  {
    id: "csharp-020",
    category: "csharp",
    difficulty: "intermediate",
    topic: "LINQ",
    type: "multiple-choice",
    question: "LINQ 的 Select() 與 SelectMany() 的差異是？",
    options: [
      { label: "A", value: "Select 處理數字，SelectMany 處理字串" },
      { label: "B", value: "Select 一對一投影；SelectMany 將巢狀集合展平（flatten）成一個序列" },
      { label: "C", value: "SelectMany 執行較快" },
      { label: "D", value: "Select 只能用於查詢語法（query syntax）" },
    ],
    answer: "B",
    explanation:
      "Select 做一對一轉換；SelectMany 適用於每個元素產生一個集合的情境，會將所有子集合合併成單一序列（展平）。例如 orders.SelectMany(o => o.Items) 可以取得所有訂單的所有商品項目。",
    tags: ["linq", "select", "selectmany", "flatten"],
  },

  // ===== Advanced (10 題) =====
  {
    id: "csharp-021",
    category: "csharp",
    difficulty: "advanced",
    topic: "委派 / 事件",
    type: "multiple-choice",
    question: "C# 中，Func<int, int, bool> 代表什麼型別的委派？",
    options: [
      { label: "A", value: "接受兩個 bool 參數，回傳 int" },
      { label: "B", value: "接受兩個 int 參數，回傳 bool" },
      { label: "C", value: "接受一個 int 參數和一個 bool 參數" },
      { label: "D", value: "接受三個參數，最後一個是回傳型別" },
    ],
    answer: "B",
    explanation:
      "Func<T1, T2, ..., TResult> 中，最後一個型別參數是回傳型別，其餘是輸入參數型別。所以 Func<int, int, bool> 是接受兩個 int、回傳 bool 的委派。沒有回傳值時使用 Action<T1, T2, ...>。",
    tags: ["delegate", "Func", "Action", "generics"],
  },
  {
    id: "csharp-022",
    category: "csharp",
    difficulty: "advanced",
    topic: "委派 / 事件",
    type: "true-false",
    question:
      "C# 的 event 關鍵字僅是語法糖，與直接使用 delegate 欄位的差異只有語意上的，沒有任何存取控制差異。",
    answer: "false",
    explanation:
      "event 關鍵字加上了存取限制：外部程式碼只能使用 += 和 -=（訂閱/取消），無法直接呼叫（invoke）或重新賦值（=）事件。直接使用 public delegate 欄位則允許外部呼叫和直接賦值，破壞封裝性。",
    tags: ["event", "delegate", "encapsulation"],
  },
  {
    id: "csharp-023",
    category: "csharp",
    difficulty: "advanced",
    topic: "Pattern Matching",
    type: "multiple-choice",
    question: "C# switch expression（C# 8+）與傳統 switch statement 的主要改進是？",
    options: [
      { label: "A", value: "switch expression 執行速度較快" },
      { label: "B", value: "switch expression 是表達式（有回傳值），支援更豐富的 pattern matching" },
      { label: "C", value: "switch expression 可以處理更多資料型別" },
      { label: "D", value: "switch expression 不需要 break 語句" },
    ],
    answer: "B",
    explanation:
      "switch expression 是表達式，可以直接賦值給變數（var result = x switch { ... }），且支援豐富的 pattern：型別 pattern、property pattern、tuple pattern、relational pattern 等，表達力遠強於傳統 switch。",
    tags: ["pattern-matching", "switch-expression", "csharp-8"],
  },
  {
    id: "csharp-024",
    category: "csharp",
    difficulty: "advanced",
    topic: "Pattern Matching",
    type: "fill-blank",
    question:
      "C# 9 的 pattern matching 中，若要同時檢查物件的多個屬性，可以使用 ___ pattern（如 { Name: \"Alice\", Age: > 18 }）。",
    answer: "property",
    explanation:
      "Property pattern 允許在一個 pattern 中匹配物件的多個屬性，語法為 { PropertyName: pattern }。C# 10 進一步支援巢狀 property pattern（{ Address: { City: \"Taipei\" } }）。",
    tags: ["pattern-matching", "property-pattern", "csharp-9"],
  },
  {
    id: "csharp-025",
    category: "csharp",
    difficulty: "advanced",
    topic: "Span<T> / Memory",
    type: "multiple-choice",
    question: "C# 的 Span<T> 相較於陣列切片（array slicing）的最大優勢是？",
    options: [
      { label: "A", value: "Span<T> 可以存在堆積（Heap）上" },
      { label: "B", value: "Span<T> 是零分配（zero-allocation）的記憶體視圖，不複製底層資料" },
      { label: "C", value: "Span<T> 支援多執行緒並行存取" },
      { label: "D", value: "Span<T> 比 Array 支援更多操作方法" },
    ],
    answer: "B",
    explanation:
      "Span<T> 提供對連續記憶體的視圖（view），slice 操作不會複製資料，避免額外的 GC 壓力。Span<T> 是 ref struct，只能存在堆疊上，因此不能被裝箱或存在堆積中。Memory<T> 是可以存在堆積上的對應型別。",
    tags: ["Span", "Memory", "performance", "zero-allocation"],
  },
  {
    id: "csharp-026",
    category: "csharp",
    difficulty: "advanced",
    topic: "Span<T> / Memory",
    type: "true-false",
    question:
      "Span<T> 可以作為 async 方法的參數或在 async 方法中使用，因為它是高效能的堆疊型別。",
    answer: "false",
    explanation:
      "Span<T> 是 ref struct，無法跨越 await 點（await point）存活，因此不能在 async 方法中使用（編譯器會報錯）。如果需要在 async 方法中使用類似功能，應改用 Memory<T>，它可以存在堆積上並跨越 await。",
    tags: ["Span", "async", "ref-struct", "Memory"],
  },
  {
    id: "csharp-027",
    category: "csharp",
    difficulty: "advanced",
    topic: "ref / out / in 參數",
    type: "multiple-choice",
    question: "C# 的 in 參數修飾詞的作用是？",
    options: [
      { label: "A", value: "與 ref 完全相同" },
      { label: "B", value: "以傳參考方式傳入，但在方法內不允許修改該參數" },
      { label: "C", value: "標記該參數為輸入驗證" },
      { label: "D", value: "強制該參數必須先初始化為 null" },
    ],
    answer: "B",
    explanation:
      "in 參數以傳參考（by reference）方式傳入，避免複製大型值型別的成本，但在方法內禁止修改（唯讀）。ref 可讀寫；out 必須在方法內賦值且呼叫前不需初始化；in 是唯讀的 ref，適合傳遞大型 struct 以節省複製成本。",
    tags: ["ref", "out", "in", "parameter-modifier"],
  },
  {
    id: "csharp-028",
    category: "csharp",
    difficulty: "advanced",
    topic: "ref / out / in 參數",
    type: "multiple-choice",
    question: "以下哪個關於 out 參數的描述是正確的？",
    options: [
      { label: "A", value: "呼叫方必須先初始化 out 變數才能傳入" },
      { label: "B", value: "方法內不需對 out 參數賦值" },
      { label: "C", value: "呼叫方傳入前不需初始化，但方法內必須在所有路徑中賦值" },
      { label: "D", value: "out 參數不能用於泛型方法" },
    ],
    answer: "C",
    explanation:
      "out 參數由被呼叫方負責賦值（callee-assigned），呼叫方傳入前不需初始化（也無法使用傳入前的值）。方法內在所有程式碼路徑中都必須對 out 參數賦值，否則編譯器報錯。C# 7 支援 out var 直接在呼叫處宣告。",
    tags: ["out", "parameter-modifier", "compiler"],
  },
  {
    id: "csharp-029",
    category: "csharp",
    difficulty: "advanced",
    topic: "委派 / 事件",
    type: "multiple-choice",
    question: "C# 中 Expression<Func<T, bool>> 與 Func<T, bool> 的差異是？",
    options: [
      { label: "A", value: "Expression 執行速度較快" },
      { label: "B", value: "Expression 保存了 lambda 的語法樹（expression tree），可被解析轉換（如 SQL）；Func 是已編譯的委派" },
      { label: "C", value: "Expression 只能用於 LINQ to Objects" },
      { label: "D", value: "Func 支援更多參數型別" },
    ],
    answer: "B",
    explanation:
      "Func<T, bool> 是編譯後的委派，直接執行程式碼。Expression<Func<T, bool>> 保存 lambda 的語法樹（AST），可被 ORM（如 EF Core）解析並翻譯為 SQL 查詢。這是 IQueryable 能產生 SQL 的關鍵機制。",
    tags: ["expression-tree", "Func", "linq", "orm"],
  },
  {
    id: "csharp-030",
    category: "csharp",
    difficulty: "advanced",
    topic: "Pattern Matching",
    type: "multiple-choice",
    question: "C# 9 的 record 型別與一般 class 相比，最主要的內建特性是什麼？",
    options: [
      { label: "A", value: "record 效能比 class 高 10 倍" },
      { label: "B", value: "record 自動實作基於值的相等性比較（value-based equality）和不可變性" },
      { label: "C", value: "record 不能有方法" },
      { label: "D", value: "record 是密封的（sealed），無法被繼承" },
    ],
    answer: "B",
    explanation:
      "record 自動產生：基於所有屬性值的 Equals() 和 GetHashCode()（值語義）、ToString() 的漂亮輸出、以及 with 表達式支援（非破壞性複製）。配合 init 屬性提供不可變性。class 預設使用參考相等性（reference equality）。",
    tags: ["record", "value-equality", "immutability", "csharp-9"],
  },
];
