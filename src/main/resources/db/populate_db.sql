INSERT INTO UNITS (ID, CODE, NAME, VERSION, CREATED_ON, MODIFIED_ON) VALUES
    (1000, 'GRAMME', 'g', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1001, 'PIECE', '', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1002, 'TABLESPOON', 'EL', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1003, 'TEASPOON', 'TL', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1004, 'LITER', 'l', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1005, 'SOME', 'etwas', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO FOODS (ID, NAME, VERSION, CREATED_ON, MODIFIED_ON) VALUES
	(2000, 'Champignons', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2001, 'gekochter Schinken', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2002, 'Cherrytomaten', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2003, 'getrockneter Schnittlauch', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2004, 'Zitronensaft', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2005, 'Nudeln', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO RECIPES (ID, NAME, INSTRUCTION, VERSION, CREATED_ON, MODIFIED_ON) VALUES
    (3000, 'Pilzpfanne in Zitronenrahm', 'Pilze schälen und in kleine Stücke schneiden. Gekochten Schinken in Würfel schneiden und zusammen mit den Pilzen anbraten...', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3001, 'Schinkennudeln', 'Nudeln bissfest kochen. Gekochter Schinken in Würfel schneiden und zusammen mit den Nudeln braten', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3002, 'Obstsalat', 'Alles kleinschnibbeln und mischen', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3003, 'Egg & Bacon', 'Bacon anbraten, warm stellen, danach Ei backen...', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3004, 'Bauerntopf', 'Man nehme...', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3005, 'Schokopudding', 'Man nehme...', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3006, 'Butterbrot', 'Spicy jalapeno bacon ipsum dolor amet turkey nisi filet mignon porchetta pork chop, pastrami magna. Corned beef in fugiat kevin nostrud meatball, frankfurter aliquip short ribs sirloin biltong alcatra. Corned beef in proident officia pastrami leberkas, commodo irure in in flank ham hock. Sirloin pork chop shank pastrami shoulder jerky burgdoggen hamburger porchetta ipsum. Filet mignon shankle venison occaecat ball tip cupidatat.

Officia veniam et in ut. Frankfurter doner capicola sausage, do corned beef excepteur voluptate tail hamburger andouille. Fatback ut minim, magna ex do occaecat boudin qui jowl hamburger eu prosciutto. Velit shank eiusmod, enim eu exercitation pancetta picanha leberkas t-bone laboris ut capicola. Laborum venison aute, velit picanha ham pork belly flank. Elit t-bone anim, ullamco pork belly pig ut qui. Venison aliqua shank sint tri-tip.

Pancetta ex boudin pork strip steak kielbasa tail velit dolore t-bone sint. Sausage brisket anim, adipisicing corned beef laborum ground round burgdoggen turkey kielbasa rump. Excepteur pig non, ullamco commodo t-bone in id exercitation venison qui sirloin. Quis adipisicing shoulder kielbasa, anim tail pancetta meatloaf irure. Velit cow spare ribs et ribeye officia buffalo jerky.

Irure elit sint beef ribs laborum sunt qui esse sausage proident quis buffalo. Et minim corned beef in. Veniam dolore dolor id pork loin, kielbasa ham hock salami eu occaecat lorem. Pork loin t-bone short ribs burgdoggen, enim sirloin pork chop officia ut ipsum ex. Porchetta enim excepteur, magna aliqua labore ut doner chicken reprehenderit laborum filet mignon commodo minim nulla. Consectetur pig minim pastrami pork chop ut. Minim reprehenderit ut pig consequat magna.

Eiusmod consequat beef ribs adipisicing. Cow ut qui, burgdoggen bresaola laborum dolore aliqua anim sunt deserunt tempor laboris reprehenderit. Lorem spare ribs magna, cupim rump chuck fatback swine quis filet mignon frankfurter beef ribs id do. T-bone ad tempor, proident shoulder labore excepteur magna.

Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3007, 'Flammkuchen Elsässer Art', 'Man nehme...', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3008, 'Dosensuppe', 'Man nehme...', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3009, 'Haferbrei à la Liv', 'Man nehme...', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3010, 'Müsli', 'Man nehme...', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO INGREDIENTS (ID, QUANTITY, UNIT_ID, FOOD_ID, RECIPE_ID, VERSION, CREATED_ON, MODIFIED_ON) VALUES
	(4000, 600, 1000, 2000, 3000, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(4001, 100, 1000, 2001, 3000, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(4002, 12, 1001, 2002, 3000, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(4003, 3, 1002, 2003, 3000, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(4004, 1, 1005, 2004, 3000, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(4005, 500, 1000, 2005, 3001, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(4006, 200, 1000, 2001, 3001, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
	
	