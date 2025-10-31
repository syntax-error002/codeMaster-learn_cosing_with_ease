const challenges = [
    {
        title: "Moving the Character",
        description: "Write a function moveCharacter(x, y) that moves our character to the specified coordinates. Use the provided character.move(x, y) method.",
        initialCode: 
`function moveCharacter(x, y) {
    // Your code here
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                moveCharacter(100, 100);
                return character.getPosition().x === 100 && character.getPosition().y === 100;
            } catch (e) {
                return false;
            }
        },
        hint: "Use character.move(x, y) to move the character"
    },
    {
        title: "Create a Pattern",
        description: "Make the character draw a square pattern by moving it in sequence. Use loops!",
        initialCode:
`function drawSquare(size) {
    // Your code here
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                drawSquare(50);
                // Test if character drew a square
                return true; // Add proper validation
            } catch (e) {
                return false;
            }
        },
        hint: "Use a loop and move the character in four directions"
    },
    {
        title: "Collect the Coins",
        description: "Write a function to collect all coins in the most efficient way. Use arrays and loops!",
        initialCode:
`function collectCoins(coinPositions) {
    // Your code here
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                const coins = [[100,100], [200,200], [300,300]];
                collectCoins(coins);
                return true; // Add proper validation
            } catch (e) {
                return false;
            }
        },
        hint: "Loop through the coin positions array and move to each position"
    },
    {
        title: "Array Manipulation",
        description: "Create a function that filters out coins worth less than 10 and collects the remaining ones. Each coin is an object with {x, y, value} properties.",
        initialCode:
`function collectValuableCoins(coins) {
    // Filter coins worth >= 10
    // Move to each valuable coin
    // Return total value collected
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                const coins = [
                    {x: 100, y: 100, value: 5},
                    {x: 200, y: 200, value: 15},
                    {x: 300, y: 300, value: 10}
                ];
                const result = collectValuableCoins(coins);
                return result === 25; // 15 + 10
            } catch (e) {
                return false;
            }
        },
        hint: "Use array.filter() and reduce()"
    },
    {
        title: "Timer Challenge",
        description: "Create a function that moves the character in a zigzag pattern while avoiding obstacles. Complete the pattern within 5 seconds!",
        initialCode:
`function zigzagMove(obstacles) {
    // Move in zigzag pattern
    // Check for collisions
    // Return true if destination reached
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                const obstacles = [[150, 150], [250, 250]];
                const startTime = Date.now();
                const result = zigzagMove(obstacles);
                return result && (Date.now() - startTime) < 5000;
            } catch (e) {
                return false;
            }
        },
        hint: "Use setInterval for timed movements"
    },
    {
        title: "Recursive Maze",
        description: "Navigate through a maze using recursion. Find the shortest path to the exit!",
        initialCode:
`function solveMaze(maze, position = {x: 0, y: 0}) {
    // Use recursion to find path
    // Return array of movements
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                const maze = [
                    [0, 0, 1, 0],
                    [1, 0, 0, 0],
                    [0, 1, 0, 1],
                    [0, 0, 0, 2]
                ];
                const path = solveMaze(maze);
                return validatePath(path, maze);
            } catch (e) {
                return false;
            }
        },
        hint: "Check all possible directions at each step"
    },
    {
        title: "Event Handler Challenge",
        description: "Create an event system where the character responds to keyboard inputs. Collect all coins within the time limit!",
        initialCode:
`function setupEventHandlers() {
    // Setup keyboard listeners
    // Move character with arrow keys
    // Collect coins on collision
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                return testEventHandlers();
            } catch (e) {
                return false;
            }
        },
        hint: "Use document.addEventListener()"
    },
    {
        title: "Async Coin Collection",
        description: "Use async/await to collect coins that appear at random intervals. Don't miss any coins!",
        initialCode:
`async function collectRandomCoins() {
    // Wait for coins to appear
    // Collect them before they disappear
    // Return total coins collected
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                return testAsyncCollection();
            } catch (e) {
                return false;
            }
        },
        hint: "Use async/await with setTimeout"
    },
    {
        title: "Object-Oriented Challenge",
        description: "Create a CoinCollector class with methods to track coins, move efficiently, and calculate score.",
        initialCode:
`class CoinCollector {
    constructor() {
        // Initialize properties
    }
    
    trackCoins(coins) {
        // Track available coins
    }
    
    calculateOptimalPath() {
        // Find best collection route
    }
    
    collectCoins() {
        // Collect coins in optimal order
    }
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                const collector = new CoinCollector();
                return testCoinCollector(collector);
            } catch (e) {
                return false;
            }
        },
        hint: "Use class methods and properties effectively"
    },
    {
        title: "Algorithm Challenge",
        description: "Implement a pathfinding algorithm to collect all coins in the most efficient order. Use A* or Dijkstra's algorithm.",
        initialCode:
`function findOptimalPath(start, coins) {
    // Implement pathfinding algorithm
    // Return array of movements
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                const start = {x: 0, y: 0};
                const coins = [
                    {x: 100, y: 100},
                    {x: 200, y: 50},
                    {x: 150, y: 150}
                ];
                const path = findOptimalPath(start, coins);
                return validateOptimalPath(path, coins);
            } catch (e) {
                return false;
            }
        },
        hint: "Calculate distances and use priority queue"
    },
    {
        title: "Multiplayer Simulation",
        description: "Create a system to coordinate multiple characters collecting coins without collisions.",
        initialCode:
`class MultiplayerSystem {
    constructor(playerCount) {
        // Initialize players
    }
    
    assignTargets(coins) {
        // Assign coins to players
    }
    
    moveAllPlayers() {
        // Coordinate movements
    }
}`,
        test: function(userCode) {
            try {
                eval(userCode);
                const system = new MultiplayerSystem(3);
                return testMultiplayerSystem(system);
            } catch (e) {
                return false;
            }
        },
        hint: "Use coordination and collision avoidance"
    }
];

class Character {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'character';
        this.element.style.backgroundColor = '#0ff';
        this.x = 0;
        this.y = 0;
        document.getElementById('gameCanvas').appendChild(this.element);
        this.updatePosition();
    }

    move(x, y) {
        this.x = x;
        this.y = y;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }
}

class Game {
    constructor() {
        this.currentLevel = 0;
        this.character = new Character();
        this.editor = CodeMirror(document.getElementById('editor'), {
            mode: "javascript",
            theme: "cyberpunk",
            lineNumbers: true,
            autofocus: true
        });
        this.initializeLevels();
        this.loadLevel(0);
    }

    initializeLevels() {
        const levelPanel = document.getElementById('levelPanel');
        challenges.forEach((challenge, index) => {
            const levelDiv = document.createElement('div');
            levelDiv.className = 'level';
            levelDiv.textContent = `Level ${index + 1}: ${challenge.title}`;
            levelDiv.onclick = () => this.loadLevel(index);
            levelPanel.appendChild(levelDiv);
        });
    }

    loadLevel(index) {
        this.currentLevel = index;
        const challenge = challenges[index];
        document.getElementById('challengeTitle').textContent = challenge.title;
        document.getElementById('challengeDescription').textContent = challenge.description;
        this.editor.setValue(challenge.initialCode);
        
        // Update active level indicator
        document.querySelectorAll('.level').forEach((level, i) => {
            level.classList.toggle('active', i === index);
        });
    }

    runCode() {
        const code = this.editor.getValue();
        const challenge = challenges[this.currentLevel];
        const output = document.getElementById('output');

        try {
            const result = challenge.test(code);
            output.innerHTML = result ? 
                '<span style="color: #0f0">Success! Challenge completed!</span>' : 
                '<span style="color: #f00">Try again! Hint: ' + challenge.hint + '</span>';
            
            if (result && this.currentLevel < challenges.length - 1) {
                setTimeout(() => {
                    this.loadLevel(this.currentLevel + 1);
                }, 1500);
            }
        } catch (e) {
            output.innerHTML = '<span style="color: #f00">Error: ' + e.message + '</span>';
        }
    }
}

const game = new Game();
window.runCode = () => game.runCode();
window.character = game.character; 