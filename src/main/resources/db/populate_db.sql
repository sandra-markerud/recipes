INSERT INTO FOODS (ID, NAME, VERSION, CREATED_ON, MODIFIED_ON) VALUES
	(1000, 'Champignons', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(1001, 'gekochter Schinken', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(1002, 'Cherrytomaten', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(1003, 'getrockneter Schnittlauch', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(1004, 'Zitronensaft', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(1005, 'Nudeln', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO RECIPES (ID, NAME, INSTRUCTION, VERSION, CREATED_ON, MODIFIED_ON) VALUES
	(2000, 'Pilzpfanne in Zitronenrahm', 'Pilze schälen und in kleine Stücke schneiden. Gekochten Schinken in Würfel schneiden und zusammen mit den Pilzen anbraten...', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2001, 'Schinkennudeln', 'Nudeln bissfest kochen. Gekochter Schinken in Würfel schneiden und zusammen mit den Nudeln braten', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO INGREDIENTS (ID, QUANTITY, UNIT, FOOD_ID, RECIPE_ID, VERSION, CREATED_ON, MODIFIED_ON) VALUES
	(3000, 600, 'GRAMME', 1000, 2000, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3001, 100, 'GRAMME', 1001, 2000, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3002, 12, 'PIECE', 1002, 2000, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3003, 3, 'TABLESPOON', 1003, 2000, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3004, 1, 'SOME', 1004, 2000, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3005, 500, 'GRAMME', 1005, 2001, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3006, 200, 'GRAMME', 1001, 2001, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
	
	