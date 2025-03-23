"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3109],{4607:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(274);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}},4816:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Vale_Linter/Introduction to Vale","title":"Introduction to vale","description":"Vale is an open source linting tool designed to enhance clarity, consistency, and quality in written content. It\'s especially useful for technical documentation, blogs, and knowledge bases. By enforcing custom style guides, teams can maintain a unified voice across all content.","source":"@site/docs/Vale_Linter/Introduction to Vale.md","sourceDirName":"Vale_Linter","slug":"/Vale_Linter/Introduction to Vale","permalink":"/documentation/docs/Vale_Linter/Introduction to Vale","draft":false,"unlisted":false,"editUrl":"https://github.com/hetfs/documentation/docs/Vale_Linter/Introduction to Vale.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Vale Linting","permalink":"/documentation/docs/category/vale-linting"},"next":{"title":"Custom Vocabularies in Vale","permalink":"/documentation/docs/Vale_Linter/Create vocab txt File"}}');var t=i(1050),r=i(4607);const l={sidebar_position:1},a="Introduction to vale",o={},c=[{value:"\ud83c\udf1f Vale&#39;s key features",id:"-vales-key-features",level:2},{value:"\ud83d\udca1 Practical use cases",id:"-practical-use-cases",level:2},{value:"\u2705 Technical documentation",id:"-technical-documentation",level:3},{value:"\u2705 Content editing &amp; review",id:"-content-editing--review",level:3},{value:"\u2705 Documentation &amp; Wiki quality assurance",id:"-documentation--wiki-quality-assurance",level:3},{value:"\ud83d\udd27 Installing vale",id:"-installing-vale",level:2},{value:"\u2699\ufe0f Configuring vale",id:"\ufe0f-configuring-vale",level:2},{value:"\ud83d\udee0\ufe0f Selecting a base style",id:"\ufe0f-selecting-a-base-style",level:2},{value:"\ud83d\udd17 Enhancing content with supplementary styles",id:"-enhancing-content-with-supplementary-styles",level:2},{value:"Combining styles for better content analysis",id:"combining-styles-for-better-content-analysis",level:3},{value:"\ud83d\udcdd File-Specific configurations",id:"-file-specific-configurations",level:2},{value:"\ud83d\udd04 Running vale",id:"-running-vale",level:2},{value:"\ud83d\udd27 Configuring the vale language server",id:"-configuring-the-vale-language-server",level:2},{value:"Setup steps",id:"setup-steps",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"introduction-to-vale",children:"Introduction to vale"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://vale.sh/",children:"Vale"})," is an open source linting tool designed to enhance ",(0,t.jsx)(n.strong,{children:"clarity, consistency, and quality"})," in written content. It's especially useful for ",(0,t.jsx)(n.strong,{children:"technical documentation, blogs, and knowledge bases"}),". By enforcing ",(0,t.jsx)(n.strong,{children:"custom style guides"}),", teams can maintain a unified voice across all content."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-vales-key-features",children:"\ud83c\udf1f Vale's key features"}),"\n",(0,t.jsxs)(n.p,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Custom Rules"}),": define rules tailored to your organization\u2019s writing standards.",(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Predefined Style Guides"}),": use existing guides like ",(0,t.jsx)(n.strong,{children:"Proselint, write-good, and alex"}),", or create your own.",(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Consistency"}),": ensure uniform terminology, brand voice, and inclusive language."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Real-time Linting"}),": identify grammar, spelling, and style issues instantly.",(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Automated Error Detection"}),": streamline content reviews for greater efficiency.",(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Minimized Manual Editing"}),": enforce writing standards and reduce manual corrections."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"CI/CD Integration"}),": works seamlessly with ",(0,t.jsx)(n.strong,{children:"GitHub Actions, GitLab CI/CD, and Git Hooks"}),".",(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Efficiency"}),": runs smoothly within ",(0,t.jsx)(n.strong,{children:"CI/CD workflows"}),".",(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Broad Compatibility"}),": supports ",(0,t.jsx)(n.strong,{children:"GitHub Actions, GitLab CI/CD, Travis CI"}),", and other automation tools."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Multi-Format Support"}),": compatible with ",(0,t.jsxs)(n.strong,{children:["Markdown ",(0,t.jsx)(n.code,{children:".md"}),", reStructuredText ",(0,t.jsx)(n.code,{children:".rst"}),", HTML ",(0,t.jsx)(n.code,{children:".html"}),", LaTeX ",(0,t.jsx)(n.code,{children:".tex"}),", and Markdown Extended ",(0,t.jsx)(n.code,{children:".mdx"})]}),".",(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Content Quality Assurance"}),": enhances quality across various content types, including ",(0,t.jsx)(n.strong,{children:"documentation and blogs"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Batch Processing"}),": facilitates large-scale content reviews."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Editor & IDE Integration"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://circleci.com/developer/orbs/orb/circleci/vale",children:"CircleCI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/tpeacock19/flymake-vale",children:"Emacs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/errata-ai/vale-action",children:"GitHub Actions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://vale.sh/docs/integrations/pre-commit",children:"Git Hooks"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/19613-vale-cli/docs",children:"JetBrains IDEs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/marcusolsson/obsidian-projects",children:"Obsidian"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.oxygenxml.com/doc/versions/23.1/ug-editor/topics/vale-linter-addon.html",children:"Oxygen XML"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://packagecontrol.io/packages/LSP-vale-ls",children:"Sublime Text"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/dense-analysis/ale",children:"Neovim"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/chrischinchilla/vale-vscode",children:"VS Code"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://wiki.qt.io/Setting_Up_Vale",children:"Qt Creator"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/koozz/zed-vale",children:"Zed"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-practical-use-cases",children:"\ud83d\udca1 Practical use cases"}),"\n",(0,t.jsx)(n.h3,{id:"-technical-documentation",children:"\u2705 Technical documentation"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd39 Standardizes terminology and formatting in ",(0,t.jsx)(n.strong,{children:"API docs, guides, and manuals"}),".",(0,t.jsx)(n.br,{}),"\n","\ud83d\udd39 Identifies ",(0,t.jsx)(n.strong,{children:"typos, ambiguities, and inconsistencies"})," in technical content."]}),"\n",(0,t.jsx)(n.h3,{id:"-content-editing--review",children:"\u2705 Content editing & review"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd39 Automates ",(0,t.jsx)(n.strong,{children:"content reviews"})," to align with brand guidelines.",(0,t.jsx)(n.br,{}),"\n","\ud83d\udd39 Improves ",(0,t.jsx)(n.strong,{children:"clarity and readability"})," by flagging common mistakes."]}),"\n",(0,t.jsx)(n.h3,{id:"-documentation--wiki-quality-assurance",children:"\u2705 Documentation & Wiki quality assurance"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd39 Enforces documentation standards for ",(0,t.jsx)(n.strong,{children:"open-source projects and enterprise knowledge bases"}),".",(0,t.jsx)(n.br,{}),"\n","\ud83d\udd39 Reduces ",(0,t.jsx)(n.strong,{children:"manual review efforts"})," with automated quality checks."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-installing-vale",children:"\ud83d\udd27 Installing vale"}),"\n",(0,t.jsx)(n.p,{children:"Install Vale using a package manager:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# macOS (Homebrew)\r\nbrew install vale  \r\n\r\n# Windows (Winget)\r\nwinget install vale  \r\n\r\n# Python (via pip)\r\npip install vale  \n"})}),"\n",(0,t.jsxs)(n.p,{children:["After installation, configure Vale by creating a ",(0,t.jsx)(n.code,{children:".vale.ini"})," file in your project\u2019s root directory."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udcd6 ",(0,t.jsxs)(n.strong,{children:["For more installation options, visit the ",(0,t.jsx)(n.a,{href:"https://vale.sh/docs/",children:"official Vale documentation"}),"."]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-configuring-vale",children:"\u2699\ufe0f Configuring vale"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"vale configuration generator"})," to create ",(0,t.jsx)(n.code,{children:".vale.ini"})," files. Define rules, severity levels, and file formats."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udccc ",(0,t.jsx)(n.strong,{children:"Generate your configuration file"})," using the ",(0,t.jsx)(n.a,{href:"https://vale.sh/generator",children:"Vale configuration generator"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-selecting-a-base-style",children:"\ud83d\udee0\ufe0f Selecting a base style"}),"\n",(0,t.jsxs)(n.p,{children:["Vale supports various ",(0,t.jsx)(n.strong,{children:"writing style guides"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["\u2714 ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/style-guide/welcome/",children:"Microsoft writing style guide"}),"\r\n\u2714 ",(0,t.jsx)(n.a,{href:"https://developers.google.com/style",children:"Google developer documentation style guide"}),"\r\n\u2714 ",(0,t.jsx)(n.a,{href:"https://redhat-documentation.github.io/vale-at-red-hat/docs/main/user-guide/redhat-style-for-vale/?utm_source=chatgpt.com",children:"Red Hat documentation style guide"})]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd39 ",(0,t.jsx)(n.strong,{children:"Use one base style"})," to prevent conflicts."]}),"\n",(0,t.jsx)(n.p,{children:"Example: Applying the Microsoft Writing Style Guide"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"StylesPath = styles\r\nMinAlertLevel = suggestion\r\nPackages = Microsoft\r\n\r\n[*.{md}]\r\nBasedOnStyles = Vale, Microsoft\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udccc ",(0,t.jsx)(n.strong,{children:"Effect:"})," The ",(0,t.jsx)(n.strong,{children:"Microsoft Writing Style Guide"})," applies to all ",(0,t.jsx)(n.code,{children:".md"})," files."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,t.jsxs)(n.strong,{children:["Run ",(0,t.jsx)(n.code,{children:"vale sync"})," after configuration to initialize Vale."]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-enhancing-content-with-supplementary-styles",children:"\ud83d\udd17 Enhancing content with supplementary styles"}),"\n",(0,t.jsxs)(n.p,{children:["Supplementary styles improve ",(0,t.jsx)(n.strong,{children:"grammar, clarity, and inclusivity"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["\u2714 ",(0,t.jsx)(n.a,{href:"https://github.com/amperser/proselint",children:"Proselint"}),": Improves grammar and readability.",(0,t.jsx)(n.br,{}),"\n","\u2714 ",(0,t.jsx)(n.a,{href:"https://github.com/btford/write-good",children:"Write-good"}),": Enforces clear, concise writing.",(0,t.jsx)(n.br,{}),"\n","\u2714 ",(0,t.jsx)(n.a,{href:"https://github.com/get-alex/alex",children:"Alex"}),": Detects non-inclusive language.",(0,t.jsx)(n.br,{}),"\n","\u2714 ",(0,t.jsx)(n.a,{href:"https://github.com/errata-ai/Joblint?tab=readme-ov-file",children:"Joblint"}),": Identifies biased language in job descriptions."]}),"\n",(0,t.jsx)(n.h3,{id:"combining-styles-for-better-content-analysis",children:"Combining styles for better content analysis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"StylesPath = styles\r\nMinAlertLevel = suggestion\r\nPackages = Microsoft, proselint, write-good, alex\r\n\r\n[*.{md}]\r\nBasedOnStyles = Vale, Microsoft, proselint, write-good, alex\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udccc ",(0,t.jsx)(n.strong,{children:"Effect:"}),(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Microsoft"})," \u2192 Writing best practices",(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Proselint"})," \u2192 Grammar and readability improvements",(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Write-good"})," \u2192 Clear, concise writing",(0,t.jsx)(n.br,{}),"\n","\u2705 ",(0,t.jsx)(n.strong,{children:"Alex"})," \u2192 Inclusive language enforcement"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-file-specific-configurations",children:"\ud83d\udcdd File-Specific configurations"}),"\n",(0,t.jsxs)(n.p,{children:["Configure Vale for ",(0,t.jsx)(n.strong,{children:"specific file types"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Markdown ",(0,t.jsx)(n.code,{children:".md"})," and Markdown Extended ",(0,t.jsx)(n.code,{children:".mdx"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"[*.{md,mdx}]\r\nBasedOnStyles = Vale, Microsoft, proselint, write-good, alex\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u2714 ",(0,t.jsx)(n.strong,{children:"Effect:"})," Applies writing rules to ",(0,t.jsx)(n.strong,{children:"Markdown and MDX files"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Markdown ",(0,t.jsx)(n.code,{children:".md"})," and reStructuredText ",(0,t.jsx)(n.code,{children:".rst"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"[*.{md,rst}]\r\nBasedOnStyles = proselint\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u2714 ",(0,t.jsx)(n.strong,{children:"Effect:"})," Proselint rules apply to ",(0,t.jsx)(n.strong,{children:"Markdown"})," and ",(0,t.jsx)(n.strong,{children:"reStructuredText"})," files (commonly used in Python documentation)."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-running-vale",children:"\ud83d\udd04 Running vale"}),"\n",(0,t.jsxs)(n.p,{children:["Once ",(0,t.jsx)(n.code,{children:".vale.ini"})," is configured, initialize Vale:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"vale sync\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u2714 ",(0,t.jsx)(n.strong,{children:"Downloads required style guides"})," from ",(0,t.jsx)(n.code,{children:"StylesPath"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udccc ",(0,t.jsx)(n.strong,{children:"Discover more styles"})," in the ",(0,t.jsx)(n.a,{href:"https://vale.sh/explorer",children:"package explorer"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-configuring-the-vale-language-server",children:"\ud83d\udd27 Configuring the vale language server"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"vale language server"})," improves your workflow by offering ",(0,t.jsx)(n.strong,{children:"real-time grammar, style, and consistency checks"})," via the ",(0,t.jsx)(n.a,{href:"https://microsoft.github.io/language-server-protocol/",children:"Language Server Protocol (LSP)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd39 Provides ",(0,t.jsx)(n.strong,{children:"autocomplete, diagnostics, hover popups, and inline suggestions"}),".",(0,t.jsx)(n.br,{}),"\n","\ud83d\udd39 Compatible with various text editors and IDEs."]}),"\n",(0,t.jsx)(n.h3,{id:"setup-steps",children:"Setup steps"}),"\n",(0,t.jsxs)(n.p,{children:["1\ufe0f\u20e3 ",(0,t.jsx)(n.strong,{children:"Download vale-LS"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/errata-ai/vale-ls/releases",children:"GitHub Releases"}),(0,t.jsx)(n.br,{}),"\n","2\ufe0f\u20e3 ",(0,t.jsx)(n.strong,{children:"Verify vale Installation"}),": ensure it\u2019s available in your system\u2019s ",(0,t.jsx)(n.code,{children:"$PATH"}),".",(0,t.jsx)(n.br,{}),"\n","3\ufe0f\u20e3 ",(0,t.jsx)(n.strong,{children:"Configure vale"}),": define linting rules in ",(0,t.jsx)(n.code,{children:".vale.ini"}),".",(0,t.jsx)(n.br,{}),"\n","4\ufe0f\u20e3 ",(0,t.jsx)(n.strong,{children:"Launch vale-LS"}),": start it in your editor."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.strong,{children:"vale and its language server"}),", you can automate content quality checks, maintain consistency, and improve writing efficiency. \ud83d\ude80"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);