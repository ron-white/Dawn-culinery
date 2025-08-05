/**
 * Drinks Menu Tab Functionality
 */

'use strict';

// Menu data from the original drinks-menu.tsx
const menuSections = [
  {
    id: "cocktails",
    header: "FRESH TASTE BUDS",
    title: "COCKTAILS & BEVERAGES",
    tabName: "Cocktails",
    subsections: [
      {
        name: "Signature Cocktails",
        items: [
          {
            name: "Midnight Manhattan",
            description: "Premium bourbon, sweet vermouth, cherry bitters",
            price: "$18",
          },
          { name: "Golden Hour Gimlet", description: "Hendrick's gin, elderflower, lime, gold leaf", price: "$16" },
          { name: "Smoke & Mirrors", description: "Mezcal, yellow Chartreuse, lime, smoked salt", price: "$20" },
          { name: "Velvet Revolution", description: "Cognac, blackberry liqueur, lemon, egg white", price: "$19" },
          { name: "Crystal Palace", description: "Vodka, blue curaçao, lime, crystal sugar", price: "$17" },
          { name: "Black Diamond", description: "Dark rum, blackberry, lime, activated charcoal", price: "$22" },
          { name: "Platinum Fizz", description: "Gin, elderflower, prosecco, silver dust", price: "$15" },
          { name: "Royal Flush", description: "Whiskey, cherry, bitters, gold flakes", price: "$21" },
          { name: "Silver Lining", description: "Tequila, agave, lime, silver tequila", price: "$18" },
          { name: "Diamond Dust", description: "Champagne, crème de cassis, edible glitter", price: "$24" },
          { name: "Crown Jewel", description: "Cognac, Grand Marnier, gold leaf garnish", price: "$26" },
        ],
      },
      {
        name: "Classic Cocktails",
        items: [
          { name: "Old Fashioned", description: "Bourbon, sugar, bitters, orange peel", price: "$14" },
          { name: "Manhattan", description: "Rye whiskey, sweet vermouth, cherry", price: "$15" },
          { name: "Martini", description: "Gin or vodka, dry vermouth, olive or twist", price: "$16" },
          { name: "Negroni", description: "Gin, Campari, sweet vermouth", price: "$13" },
          { name: "Whiskey Sour", description: "Bourbon, lemon juice, simple syrup, egg white", price: "$12" },
          { name: "Margarita", description: "Tequila, triple sec, lime juice, salt rim", price: "$13" },
          { name: "Mojito", description: "White rum, mint, lime, sugar, soda water", price: "$11" },
          { name: "Cosmopolitan", description: "Vodka, triple sec, cranberry, lime", price: "$14" },
          { name: "Sazerac", description: "Rye whiskey, absinthe, sugar, Peychaud's bitters", price: "$16" },
        ],
      },
      {
        name: "Mocktails",
        items: [
          { name: "Virgin Mojito", description: "Fresh mint, lime, sugar, soda water", price: "$8" },
          { name: "Sparkling Berry Lemonade", description: "Mixed berries, lemon, sparkling water", price: "$7" },
          { name: "Cucumber Mint Cooler", description: "Cucumber, mint, lime, tonic water", price: "$8" },
        ],
      },
      {
        name: "Sodas & Juices",
        items: [
          { name: "Coca-Cola", description: "Classic cola, ice cold", price: "$4" },
          { name: "Pepsi", description: "Refreshing cola beverage", price: "$4" },
          { name: "Sprite", description: "Lemon-lime soda, crisp and clean", price: "$4" },
          { name: "Ginger Ale", description: "Spicy ginger soda", price: "$4" },
          { name: "Orange Juice", description: "Fresh squeezed orange juice", price: "$5" },
          { name: "Cranberry Juice", description: "Tart cranberry juice", price: "$5" },
          { name: "Pineapple Juice", description: "Tropical pineapple juice", price: "$5" },
        ],
      },
    ],
  },
  {
    id: "single-malts",
    header: "SCOTTISH HERITAGE",
    title: "SINGLE MALT SCOTCH",
    tabName: "Single Malts",
    items: [
      {
        name: "Macallan 12",
        description: "Highland single malt, sherry oak casks",
        single: "$18",
        double: "$32",
        bottle: "$450",
      },
      {
        name: "Glenfiddich 18",
        description: "Speyside single malt, 18 years aged",
        single: "$22",
        double: "$40",
        bottle: "$520",
      },
      {
        name: "Lagavulin 16",
        description: "Islay single malt, peated and smoky",
        single: "$20",
        double: "$36",
        bottle: "$480",
      },
      {
        name: "Ardbeg 10",
        description: "Islay single malt, intense peat smoke",
        single: "$16",
        double: "$28",
        bottle: "$380",
      },
      {
        name: "Glenlivet 15",
        description: "Speyside single malt, French oak finish",
        single: "$17",
        double: "$30",
        bottle: "$420",
      },
    ],
  },
  {
    id: "blended-scotch",
    header: "SCOTTISH BLENDS",
    title: "BLENDED SCOTCH",
    tabName: "Blended Scotch",
    items: [
      {
        name: "Johnnie Walker Blue",
        description: "Premium blended Scotch whisky",
        single: "$25",
        double: "$45",
        bottle: "$600",
      },
      {
        name: "Chivas Regal 18",
        description: "18-year-old blended Scotch",
        single: "$16",
        double: "$28",
        bottle: "$380",
      },
      { name: "Dewar's 18", description: "Double aged blended Scotch", single: "$14", double: "$24", bottle: "$340" },
    ],
  },
  {
    id: "american-whiskey",
    header: "AMERICAN CRAFT",
    title: "AMERICAN WHISKEY",
    tabName: "American Whiskey",
    items: [
      {
        name: "Pappy Van Winkle 15",
        description: "Kentucky bourbon, 15 years aged",
        single: "$45",
        double: "$80",
        bottle: "$1200",
      },
      {
        name: "Blanton's",
        description: "Single barrel bourbon, hand-selected",
        single: "$22",
        double: "$40",
        bottle: "$520",
      },
      {
        name: "Buffalo Trace",
        description: "Kentucky straight bourbon whiskey",
        single: "$12",
        double: "$20",
        bottle: "$280",
      },
    ],
  },
  {
    id: "cognac",
    header: "FRENCH ELEGANCE",
    title: "COGNAC",
    tabName: "Cognac",
    items: [
      {
        name: "Hennessy XO",
        description: "Extra Old cognac, complex and refined",
        single: "$35",
        double: "$65",
        bottle: "$850",
      },
      {
        name: "Rémy Martin VSOP",
        description: "Very Superior Old Pale cognac",
        single: "$18",
        double: "$32",
        bottle: "$450",
      },
    ],
  },
  {
    id: "vodka",
    header: "PURE SPIRITS",
    title: "PREMIUM VODKA",
    tabName: "Vodka",
    items: [
      {
        name: "Grey Goose",
        description: "Premium French vodka, smooth finish",
        single: "$14",
        double: "$24",
        bottle: "$340",
      },
      {
        name: "Beluga Noble",
        description: "Russian vodka, noble quality",
        single: "$18",
        double: "$32",
        bottle: "$450",
      },
    ],
  },
  {
    id: "tequila",
    header: "MEXICAN TRADITION",
    title: "PREMIUM TEQUILA",
    tabName: "Tequila",
    items: [
      {
        name: "Don Julio 1942",
        description: "Ultra-premium añejo tequila",
        single: "$28",
        double: "$50",
        bottle: "$680",
      },
      {
        name: "Clase Azul Reposado",
        description: "Premium reposado, hand-painted bottle",
        single: "$25",
        double: "$45",
        bottle: "$620",
      },
    ],
  },
  {
    id: "gin",
    header: "BOTANICAL SPIRITS",
    title: "PREMIUM GIN",
    tabName: "Gin",
    items: [
      {
        name: "Hendrick's",
        description: "Scottish gin, cucumber and rose",
        single: "$12",
        double: "$20",
        bottle: "$290",
      },
      {
        name: "Bombay Sapphire",
        description: "London dry gin, 10 botanicals",
        single: "$10",
        double: "$16",
        bottle: "$240",
      },
    ],
  },
  {
    id: "irish-whiskey",
    header: "IRISH HERITAGE",
    title: "IRISH WHISKEY",
    tabName: "Irish Whiskey",
    items: [
      { name: "Jameson 18", description: "18-year-old Irish whiskey", single: "$20", double: "$36", bottle: "$480" },
      {
        name: "Redbreast 12",
        description: "Single pot still Irish whiskey",
        single: "$16",
        double: "$28",
        bottle: "$390",
      },
    ],
  },
  {
    id: "rum",
    header: "CARIBBEAN SPIRITS",
    title: "PREMIUM RUM",
    tabName: "Rum",
    items: [
      {
        name: "Zacapa 23",
        description: "Guatemalan aged rum, 23 years",
        single: "$18",
        double: "$32",
        bottle: "$450",
      },
      { name: "Mount Gay XO", description: "Barbados rum, extra old", single: "$16", double: "$28", bottle: "$390" },
    ],
  },
  {
    id: "liqueurs",
    header: "FINE LIQUEURS",
    title: "PREMIUM LIQUEURS",
    tabName: "Liqueurs",
    items: [
      {
        name: "Grand Marnier",
        description: "French orange liqueur, cognac base",
        single: "$14",
        double: "$24",
        bottle: "$340",
      },
      {
        name: "Cointreau",
        description: "French triple sec, orange liqueur",
        single: "$12",
        double: "$20",
        bottle: "$290",
      },
    ],
  },
  {
    id: "beer",
    header: "CRAFT BREWS",
    title: "BEER SELECTION",
    tabName: "Beer",
    subsections: [
      {
        name: "Draught Beer",
        items: [
          { name: "Guinness", description: "Irish dry stout, creamy head", price: "$7" },
          { name: "Stella Artois", description: "Belgian lager, crisp and clean", price: "$6" },
          { name: "Heineken", description: "Dutch lager, refreshing", price: "$6" },
          { name: "Local IPA", description: "Hoppy India Pale Ale", price: "$8" },
        ],
      },
      {
        name: "Bottled Beer",
        items: [
          { name: "Corona Extra", description: "Mexican lager, light and crisp", price: "$5" },
          { name: "Budweiser", description: "American lager, classic taste", price: "$4" },
          { name: "Peroni", description: "Italian lager, premium quality", price: "$6" },
          { name: "Asahi", description: "Japanese lager, smooth finish", price: "$6" },
        ],
      },
    ],
  },
  {
    id: "wine-glass",
    header: "FINE WINES",
    title: "WINE BY GLASS",
    tabName: "Wine by Glass",
    subsections: [
      {
        name: "Red Wine",
        items: [
          { name: "Cabernet Sauvignon", description: "Napa Valley, full-bodied red", price: "$12" },
          { name: "Merlot", description: "Washington State, smooth and rich", price: "$11" },
          { name: "Pinot Noir", description: "Oregon, light and elegant", price: "$13" },
          { name: "Malbec", description: "Argentina, bold and spicy", price: "$12" },
        ],
      },
      {
        name: "White Wine",
        items: [
          { name: "Chardonnay", description: "California, oak-aged white", price: "$11" },
          { name: "Sauvignon Blanc", description: "New Zealand, crisp and fresh", price: "$10" },
          { name: "Pinot Grigio", description: "Italy, light and refreshing", price: "$10" },
          { name: "Riesling", description: "Germany, off-dry and aromatic", price: "$11" },
        ],
      },
    ],
  },
  {
    id: "champagne",
    header: "CHAMPAGNE COLLECTION",
    title: "CHAMPAGNE",
    tabName: "Champagne",
    items: [
      { name: "Dom Pérignon", description: "Vintage champagne, elegant and refined", price: "$320" },
      { name: "Krug Grande Cuvée", description: "Prestige champagne, complex blend", price: "$280" },
      { name: "Louis Roederer Cristal", description: "Luxury champagne, crystal clear", price: "$450" },
    ],
  },
];

// Initialize the drinks menu
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Check if elements exist before proceeding
  if (tabButtons.length === 0 || tabContents.length === 0) {
    console.log('Drinks menu elements not found on this page');
    return;
  }

  // Generate all tab content
  generateAllTabContent();

  // Add click event listeners to tab buttons
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      const targetContent = document.getElementById(tabId);
      
      if (!targetContent) {
        console.log('Target tab content not found:', tabId);
        return;
      }
      
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      targetContent.classList.add('active');
    });
  });
});

function generateAllTabContent() {
  menuSections.forEach(section => {
    const tabContent = document.getElementById(section.id);
    if (tabContent && section.id !== 'cocktails') { // Skip cocktails as it's already in HTML
      try {
        tabContent.innerHTML = generateTabContentHTML(section);
      } catch (error) {
        console.log('Error generating content for section:', section.id, error);
      }
    }
  });
}

function generateTabContentHTML(section) {
  let html = `
    <div class="tab-header">
      <p class="tab-subtitle">${section.header}</p>
      <h2 class="tab-title">${section.title}</h2>
      <div class="separator-line"></div>
    </div>
  `;

  if (section.subsections) {
    section.subsections.forEach(subsection => {
      html += `
        <div class="drinks-subsection">
          <h3 class="subsection-title">${subsection.name}</h3>
          <div class="drinks-grid">
            ${subsection.items.map(item => `
              <div class="drink-item">
                <div class="drink-info">
                  <h4 class="drink-name">${item.name}</h4>
                  <p class="drink-description">${item.description}</p>
                </div>
                <div class="drink-price">${item.price}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });
  } else if (section.items) {
    html += `
      <div class="drinks-grid">
        ${section.items.map(item => {
          if (item.single && item.double && item.bottle) {
            return `
              <div class="drink-item spirits">
                <div class="drink-info">
                  <h4 class="drink-name">${item.name}</h4>
                  <p class="drink-description">${item.description}</p>
                </div>
                <div class="drink-pricing">
                  <div class="pricing-labels">
                    <span>Single</span>
                    <span>Double</span>
                    <span>Bottle</span>
                  </div>
                  <div class="pricing-values">
                    <span>${item.single}</span>
                    <span>${item.double}</span>
                    <span>${item.bottle}</span>
                  </div>
                </div>
              </div>
            `;
          } else {
            return `
              <div class="drink-item">
                <div class="drink-info">
                  <h4 class="drink-name">${item.name}</h4>
                  <p class="drink-description">${item.description}</p>
                </div>
                <div class="drink-price">${item.price}</div>
              </div>
            `;
          }
        }).join('')}
      </div>
    `;
  }

  return html;
}
