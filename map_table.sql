SELECT zipcode, COUNT(*) AS member_count
FROM core_memberzipcode
GROUP BY zipcode;