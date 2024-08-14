# Shareholder project

Example of the project structure

/shareholder
│
├── /frontend
│   ├── /public
│   ├── /src
│   │   ├── /components
│   │   ├── /pages
│   │   ├── /assets
│   │   ├── index.js
│   │   ├── App.js
│   │   └── ...
│   ├── package.json
│   ├── package-lock.json
│   └── ... (rest of the React files)
│
├── /backend
│   ├── /src
│   │   ├── /main
│   │   │   ├── /java
│   │   │   │   └── /com/dev/shareholder
│   │   │   │       ├── /controller
│   │   │   │       ├── /service
│   │   │   │       ├── /model
│   │   │   │       ├── /repository
│   │   │   │       └── Application.java
│   │   │   ├── /resources
│   │   │   │   ├── application.properties
│   │   │   │   └── ...
│   │   │   └── /test
│   │   │       └── /java
│   │   │           └── /com/dev/shareholder
│   │   │               └── ...
│   │   └── ...
│   ├── /target
│   ├── pom.xml
│   └── ... (rest of the Spring Bootin files)
│
└── README.md
