"use client"

import { useState } from "react"

export default function DrinksMenu() {
  const [activeTab, setActiveTab] = useState(0)

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
            { name: "Tonic Water", description: "Premium tonic water", price: "$4" },
            { name: "Club Soda", description: "Sparkling water with minerals", price: "$4" },
            { name: "Orange Juice", description: "Fresh squeezed orange juice", price: "$5" },
            { name: "Cranberry Juice", description: "Tart cranberry juice", price: "$5" },
            { name: "Pineapple Juice", description: "Tropical pineapple juice", price: "$5" },
          ],
        },
        {
          name: "Water",
          items: [
            { name: "Still Water", description: "Premium still water", price: "$3" },
            { name: "Sparkling Water", description: "Effervescent mineral water", price: "$4" },
            { name: "Premium Spring Water", description: "Natural spring water", price: "$6" },
            { name: "Flavored Sparkling Water", description: "Lightly flavored sparkling water", price: "$5" },
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
        {
          name: "Balvenie 14",
          description: "Speyside single malt, Caribbean cask",
          single: "$19",
          double: "$34",
          bottle: "$460",
        },
        {
          name: "Oban 14",
          description: "Highland single malt, maritime influence",
          single: "$18",
          double: "$32",
          bottle: "$440",
        },
        {
          name: "Talisker 10",
          description: "Island single malt, smoky and spicy",
          single: "$16",
          double: "$28",
          bottle: "$390",
        },
        {
          name: "Highland Park 12",
          description: "Island single malt, honey and smoke",
          single: "$15",
          double: "$26",
          bottle: "$360",
        },
        {
          name: "Springbank 10",
          description: "Campbeltown single malt, complex",
          single: "$17",
          double: "$30",
          bottle: "$410",
        },
        {
          name: "Laphroaig 10",
          description: "Islay single malt, medicinal peat",
          single: "$16",
          double: "$28",
          bottle: "$380",
        },
        {
          name: "Bruichladdich Classic",
          description: "Islay single malt, unpeated",
          single: "$14",
          double: "$24",
          bottle: "$340",
        },
        {
          name: "Dalmore 12",
          description: "Highland single malt, sherry cask",
          single: "$18",
          double: "$32",
          bottle: "$450",
        },
        {
          name: "Glenmorangie 10",
          description: "Highland single malt, bourbon barrels",
          single: "$13",
          double: "$22",
          bottle: "$320",
        },
        {
          name: "Aberlour 12",
          description: "Speyside single malt, double cask",
          single: "$16",
          double: "$28",
          bottle: "$390",
        },
        {
          name: "Craigellachie 13",
          description: "Speyside single malt, sulfur notes",
          single: "$17",
          double: "$30",
          bottle: "$420",
        },
        {
          name: "Bunnahabhain 12",
          description: "Islay single malt, unpeated",
          single: "$18",
          double: "$32",
          bottle: "$440",
        },
        {
          name: "Caol Ila 12",
          description: "Islay single malt, light peat",
          single: "$17",
          double: "$30",
          bottle: "$410",
        },
        {
          name: "Clynelish 14",
          description: "Highland single malt, waxy texture",
          single: "$19",
          double: "$34",
          bottle: "$470",
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
        {
          name: "Ballantine's 17",
          description: "17-year-old blended Scotch",
          single: "$13",
          double: "$22",
          bottle: "$320",
        },
        {
          name: "Royal Salute 21",
          description: "21-year-old premium blend",
          single: "$20",
          double: "$36",
          bottle: "$480",
        },
        {
          name: "Macallan Gold",
          description: "Double cask blended malt",
          single: "$15",
          double: "$26",
          bottle: "$360",
        },
        {
          name: "Compass Box Spice Tree",
          description: "Artisanal blended malt",
          single: "$17",
          double: "$30",
          bottle: "$420",
        },
        {
          name: "Monkey Shoulder",
          description: "Triple malt blended whisky",
          single: "$12",
          double: "$20",
          bottle: "$290",
        },
        {
          name: "Famous Grouse 18",
          description: "18-year-old blended Scotch",
          single: "$14",
          double: "$24",
          bottle: "$340",
        },
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
        {
          name: "Maker's Mark 46",
          description: "Premium Kentucky bourbon, French oak",
          single: "$14",
          double: "$24",
          bottle: "$340",
        },
        {
          name: "Woodford Reserve",
          description: "Premium Kentucky bourbon",
          single: "$13",
          double: "$22",
          bottle: "$320",
        },
        {
          name: "Eagle Rare",
          description: "10-year Kentucky straight bourbon",
          single: "$16",
          double: "$28",
          bottle: "$390",
        },
        {
          name: "Knob Creek 12",
          description: "Small batch bourbon, 12 years aged",
          single: "$15",
          double: "$26",
          bottle: "$360",
        },
        {
          name: "Four Roses Single Barrel",
          description: "Premium single barrel bourbon",
          single: "$17",
          double: "$30",
          bottle: "$420",
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
        {
          name: "Martell Cordon Bleu",
          description: "Premium cognac blend",
          single: "$16",
          double: "$28",
          bottle: "$390",
        },
        { name: "Courvoisier VS", description: "Very Special cognac", single: "$14", double: "$24", bottle: "$340" },
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
        {
          name: "Tito's",
          description: "American craft vodka, corn-based",
          single: "$10",
          double: "$16",
          bottle: "$240",
        },
        {
          name: "Ketel One",
          description: "Dutch vodka, copper pot distilled",
          single: "$12",
          double: "$20",
          bottle: "$290",
        },
        { name: "Chopin", description: "Polish potato vodka, artisanal", single: "$15", double: "$26", bottle: "$360" },
        {
          name: "Stolichnaya Elite",
          description: "Russian premium vodka",
          single: "$16",
          double: "$28",
          bottle: "$390",
        },
        {
          name: "Absolut Elyx",
          description: "Swedish single estate vodka",
          single: "$13",
          double: "$22",
          bottle: "$320",
        },
        { name: "Ciroc", description: "French vodka, grape-based", single: "$14", double: "$24", bottle: "$340" },
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
        {
          name: "Patrón Silver",
          description: "100% blue agave, crystal clear",
          single: "$14",
          double: "$24",
          bottle: "$340",
        },
        {
          name: "Herradura Añejo",
          description: "Aged 25 months in oak barrels",
          single: "$16",
          double: "$28",
          bottle: "$390",
        },
        {
          name: "Casamigos Blanco",
          description: "George Clooney's premium tequila",
          single: "$15",
          double: "$26",
          bottle: "$360",
        },
        {
          name: "Fortaleza Blanco",
          description: "Traditional tahona-crushed agave",
          single: "$17",
          double: "$30",
          bottle: "$420",
        },
        {
          name: "Ocho Plata",
          description: "Single estate, vintage tequila",
          single: "$13",
          double: "$22",
          bottle: "$320",
        },
        {
          name: "El Tesoro Platinum",
          description: "100% agave, traditional methods",
          single: "$14",
          double: "$24",
          bottle: "$340",
        },
        {
          name: "Avión Silver",
          description: "Ultra-premium 100% blue agave",
          single: "$16",
          double: "$28",
          bottle: "$390",
        },
        {
          name: "Casa Dragones Joven",
          description: "Small batch, 100% blue agave",
          single: "$22",
          double: "$40",
          bottle: "$520",
        },
        {
          name: "Espolòn Blanco",
          description: "100% blue agave, smooth finish",
          single: "$10",
          double: "$16",
          bottle: "$240",
        },
        {
          name: "Milagro Select Barrel",
          description: "Barrel reserve, complex flavors",
          single: "$18",
          double: "$32",
          bottle: "$450",
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
        {
          name: "Tanqueray No. Ten",
          description: "Premium London dry gin",
          single: "$13",
          double: "$22",
          bottle: "$320",
        },
        {
          name: "The Botanist",
          description: "Islay dry gin, 22 botanicals",
          single: "$14",
          double: "$24",
          bottle: "$340",
        },
        { name: "Monkey 47", description: "German gin, 47 botanicals", single: "$16", double: "$28", bottle: "$390" },
        {
          name: "Plymouth",
          description: "English gin, smooth and earthy",
          single: "$11",
          double: "$18",
          bottle: "$260",
        },
        {
          name: "Aviation",
          description: "American gin, floral and citrus",
          single: "$13",
          double: "$22",
          bottle: "$320",
        },
        {
          name: "Nolet's Silver",
          description: "Dutch gin, peach and raspberry",
          single: "$18",
          double: "$32",
          bottle: "$450",
        },
        {
          name: "St. George Terroir",
          description: "California gin, forest botanicals",
          single: "$15",
          double: "$26",
          bottle: "$360",
        },
        {
          name: "Sipsmith London Dry",
          description: "Traditional London dry gin",
          single: "$12",
          double: "$20",
          bottle: "$290",
        },
        {
          name: "Roku",
          description: "Japanese gin, six Japanese botanicals",
          single: "$14",
          double: "$24",
          bottle: "$340",
        },
        {
          name: "Empress 1908",
          description: "Canadian gin, butterfly pea flower",
          single: "$15",
          double: "$26",
          bottle: "$360",
        },
        {
          name: "Malfy Gin Rosa",
          description: "Italian gin, pink grapefruit",
          single: "$13",
          double: "$22",
          bottle: "$320",
        },
        {
          name: "Beefeater 24",
          description: "London dry gin, tea botanicals",
          single: "$11",
          double: "$18",
          bottle: "$260",
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
        {
          name: "Green Spot",
          description: "Single pot still, château cask",
          single: "$15",
          double: "$26",
          bottle: "$360",
        },
        {
          name: "Tullamore Dew 14",
          description: "14-year-old Irish whiskey",
          single: "$14",
          double: "$24",
          bottle: "$340",
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
        {
          name: "Appleton Estate 21",
          description: "Jamaican rum, 21 years aged",
          single: "$20",
          double: "$36",
          bottle: "$480",
        },
        {
          name: "Diplomatico Reserva",
          description: "Venezuelan rum, exclusiva",
          single: "$15",
          double: "$26",
          bottle: "$360",
        },
        {
          name: "El Dorado 15",
          description: "Guyanese rum, 15 years aged",
          single: "$17",
          double: "$30",
          bottle: "$420",
        },
        { name: "Plantation XO", description: "Barbados rum, extra old", single: "$16", double: "$28", bottle: "$390" },
        {
          name: "Bacardi 8",
          description: "Puerto Rican rum, 8 years aged",
          single: "$12",
          double: "$20",
          bottle: "$290",
        },
        {
          name: "Captain Morgan Private Stock",
          description: "Spiced rum, premium blend",
          single: "$11",
          double: "$18",
          bottle: "$260",
        },
        {
          name: "Kraken Black Spiced",
          description: "Caribbean black spiced rum",
          single: "$10",
          double: "$16",
          bottle: "$240",
        },
        { name: "Gosling's Black Seal", description: "Bermuda black rum", single: "$9", double: "$14", bottle: "$220" },
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
        {
          name: "Amaretto di Saronno",
          description: "Italian almond liqueur",
          single: "$10",
          double: "$16",
          bottle: "$240",
        },
        {
          name: "Baileys Irish Cream",
          description: "Irish cream liqueur",
          single: "$9",
          double: "$14",
          bottle: "$220",
        },
        { name: "Kahlúa", description: "Mexican coffee liqueur", single: "$8", double: "$12", bottle: "$200" },
        { name: "Sambuca", description: "Italian anise liqueur", single: "$9", double: "$14", bottle: "$220" },
        { name: "Limoncello", description: "Italian lemon liqueur", single: "$10", double: "$16", bottle: "$240" },
        { name: "Chambord", description: "French raspberry liqueur", single: "$11", double: "$18", bottle: "$260" },
        { name: "St-Germain", description: "French elderflower liqueur", single: "$12", double: "$20", bottle: "$290" },
        {
          name: "Drambuie",
          description: "Scottish honey and herb liqueur",
          single: "$11",
          double: "$18",
          bottle: "$260",
        },
        { name: "Benedictine", description: "French herbal liqueur", single: "$13", double: "$22", bottle: "$320" },
        {
          name: "Chartreuse Green",
          description: "French herbal liqueur, 130 herbs",
          single: "$14",
          double: "$24",
          bottle: "$340",
        },
        {
          name: "Fernet-Branca",
          description: "Italian bitter herbal liqueur",
          single: "$10",
          double: "$16",
          bottle: "$240",
        },
        { name: "Aperol", description: "Italian aperitif, orange bitter", single: "$9", double: "$14", bottle: "$220" },
        { name: "Campari", description: "Italian bitter aperitif", single: "$9", double: "$14", bottle: "$220" },
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
        {
          name: "Rosé Wine",
          items: [
            { name: "Provence Rosé", description: "France, dry and mineral", price: "$12" },
            { name: "White Zinfandel", description: "California, sweet and fruity", price: "$9" },
          ],
        },
        {
          name: "Sparkling Wine",
          items: [
            { name: "Prosecco", description: "Italy, sparkling and crisp", price: "$10" },
            { name: "Cava", description: "Spain, traditional method sparkling", price: "$9" },
          ],
        },
        {
          name: "Sake",
          items: [
            { name: "Junmai", description: "Pure rice sake, clean taste", price: "$8" },
            { name: "Ginjo", description: "Premium sake, floral notes", price: "$10" },
            { name: "Daiginjo", description: "Super premium sake, delicate", price: "$14" },
            { name: "Nigori", description: "Unfiltered sake, creamy texture", price: "$9" },
            { name: "Sparkling Sake", description: "Effervescent sake, refreshing", price: "$11" },
          ],
        },
      ],
    },
    {
      id: "wine-bottle",
      header: "WINE CELLAR",
      title: "WINE BY BOTTLE",
      tabName: "Wine by Bottle",
      subsections: [
        {
          name: "Red Wine (33 selections)",
          items: [
            { name: "Caymus Cabernet Sauvignon", description: "Napa Valley, rich and bold", price: "$85" },
            { name: "Silver Oak Alexander Valley", description: "Sonoma County, elegant structure", price: "$95" },
            { name: "Opus One", description: "Napa Valley, Bordeaux blend", price: "$450" },
            { name: "Screaming Eagle", description: "Napa Valley, cult cabernet", price: "$850" },
            { name: "Château Margaux", description: "Bordeaux, first growth", price: "$650" },
            { name: "Barolo Brunate", description: "Piedmont, nebbiolo grape", price: "$120" },
            { name: "Amarone della Valpolicella", description: "Veneto, dried grape wine", price: "$110" },
            { name: "Châteauneuf-du-Pape", description: "Rhône Valley, traditional blend", price: "$95" },
          ],
        },
        {
          name: "White Wine (24 selections)",
          items: [
            { name: "Chablis Premier Cru", description: "Burgundy, mineral and crisp", price: "$75" },
            { name: "Sancerre", description: "Loire Valley, sauvignon blanc", price: "$65" },
            { name: "Puligny-Montrachet", description: "Burgundy, premier chardonnay", price: "$120" },
            { name: "Riesling Kabinett", description: "Mosel, German precision", price: "$45" },
            { name: "Albariño", description: "Rías Baixas, Spanish coastal", price: "$38" },
            { name: "Grüner Veltliner", description: "Austria, crisp and herbal", price: "$42" },
          ],
        },
        {
          name: "Rosé Wine (7 selections)",
          items: [
            { name: "Whispering Angel", description: "Provence, pale and elegant", price: "$35" },
            { name: "Miraval", description: "Provence, Jolie-Pitt estate", price: "$28" },
            { name: "Bandol Rosé", description: "Provence, structured and complex", price: "$45" },
            { name: "Sancerre Rosé", description: "Loire Valley, pinot noir", price: "$38" },
            { name: "Tavel", description: "Rhône Valley, full-bodied rosé", price: "$32" },
            { name: "Côtes de Provence", description: "Classic Provence style", price: "$25" },
            { name: "Rosé Champagne", description: "Sparkling rosé, elegant", price: "$85" },
          ],
        },
        {
          name: "Sparkling Wine (3 selections)",
          items: [
            { name: "Franciacorta DOCG", description: "Italian sparkling, traditional method", price: "$55" },
            { name: "Crémant de Loire", description: "French sparkling, Loire Valley", price: "$35" },
            { name: "English Sparkling", description: "Sussex, chalk soil terroir", price: "$48" },
          ],
        },
        {
          name: "Sake (6 selections)",
          items: [
            { name: "Dassai 23", description: "Junmai daiginjo, 23% polish", price: "$180" },
            { name: "Kubota Manju", description: "Junmai daiginjo, elegant", price: "$85" },
            { name: "Hakkaisan", description: "Junmai ginjo, clean and pure", price: "$65" },
            { name: "Gekkeikan Black & Gold", description: "Junmai, traditional brewing", price: "$45" },
            { name: "Ozeki Dry", description: "Junmai, crisp and dry", price: "$35" },
            { name: "Tyku Sake", description: "Junmai ginjo, modern style", price: "$55" },
          ],
        },
        {
          name: "Sweet Wine (2 selections)",
          items: [
            { name: "Sauternes", description: "Bordeaux, noble rot dessert wine", price: "$95" },
            { name: "Port Vintage", description: "Portuguese fortified wine", price: "$75" },
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
        { name: "Perrier-Jouët Belle Epoque", description: "Art Nouveau bottle, floral notes", price: "$180" },
        { name: "Veuve Clicquot La Grande Dame", description: "Prestige cuvée, rich and powerful", price: "$220" },
        { name: "Bollinger Grande Année", description: "Vintage champagne, full-bodied", price: "$160" },
        { name: "Pol Roger Winston Churchill", description: "Tribute champagne, robust and elegant", price: "$240" },
        { name: "Taittinger Comtes de Champagne", description: "Blanc de Blancs, pure Chardonnay", price: "$200" },
        {
          name: "Laurent-Perrier Grand Siècle",
          description: "Multi-vintage blend, exceptional quality",
          price: "$190",
        },
        { name: "Armand de Brignac Ace of Spades", description: "Luxury champagne, gold bottle", price: "$380" },
      ],
    },
  ]

  const renderPricing = (item: any) => {
    if (item.single && item.double && item.bottle) {
      return (
        <div className="text-right">
          <div className="flex gap-4 text-sm text-gray-600 mb-1">
            <span>Single</span>
            <span>Double</span>
            <span>Bottle</span>
          </div>
          <div className="flex gap-4 font-bold text-orange-500">
            <span>{item.single}</span>
            <span>{item.double}</span>
            <span>{item.bottle}</span>
          </div>
        </div>
      )
    }
    return <div className="font-bold text-xl text-orange-500">{item.price}</div>
  }

  const renderContent = () => {
    const section = menuSections[activeTab]

    if (section.subsections) {
      return (
        <div className="space-y-12">
          {section.subsections.map((subsection, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-6 text-center tracking-wide" style={{ fontFamily: "serif" }}>
                {subsection.name}
              </h3>
              <div className="space-y-6">
                {subsection.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-start py-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-25 transition-colors px-4 -mx-4"
                  >
                    <div className="flex-1 pr-8">
                      <h4 className="font-semibold text-xl mb-2 tracking-wide">{item.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    {renderPricing(item)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    }

    return (
      <div className="space-y-8">
        {section.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start py-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-25 transition-colors px-4 -mx-4"
          >
            <div className="flex-1 pr-8">
              <h3 className="font-semibold text-xl mb-2 tracking-wide">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
            {renderPricing(item)}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="text-center py-12 border-b border-gray-100">
        <h1 className="text-3xl font-bold mb-4 tracking-wider" style={{ fontFamily: "serif" }}>
          DRINKS
        </h1>
        <div className="w-24 h-0.5 bg-orange-500 mx-auto"></div>
      </div>

      {/* Elegant Tab Navigation */}
      <div className="border-b border-gray-100">
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-0 overflow-x-auto">
              {menuSections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    px-6 py-6 text-sm font-medium tracking-wider transition-all duration-300 relative whitespace-nowrap
                    border-r border-gray-100 last:border-r-0
                    ${
                      activeTab === index
                        ? "text-orange-500 bg-gray-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-25"
                    }
                  `}
                >
                  {section.tabName.toUpperCase()}
                  {activeTab === index && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <div className="text-orange-500 text-sm font-medium tracking-wider mb-3">
            {menuSections[activeTab].header}
          </div>
          <h2 className="text-4xl font-bold tracking-wide" style={{ fontFamily: "serif" }}>
            {menuSections[activeTab].title}
          </h2>
          <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {renderContent()}
      </div>
    </div>
  )
}
