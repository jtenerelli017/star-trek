USE star_trek;

SELECT 
    ship.registry,
    ship.name,
    ship.class
FROM
	starship_data AS ship
INNER JOIN
    (SELECT 
        ope.starship_reg AS ope_reg,
            ope.personnel_id AS ope_id,
            ope.date_start AS ope_start,
            ope.date_end AS ope_end,
            own.starship_reg AS own_reg,
            own.personnel_id AS own_id,
            own.date_start AS own_start,
            own.date_end AS own_end
    FROM
        starship_operator AS ope
    INNER JOIN starship_owner AS own ON (ope.starship_reg = own.starship_reg
        AND NOT ope.date_end IS NULL
        AND NOT ope.date_end = own.date_end)
        OR (ope.starship_reg = own.starship_reg
        AND ope.date_start > own.date_start)) AS evaluate ON ship.registry = evaluate.ope_reg;