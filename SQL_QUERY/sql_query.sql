SELECT reviewers.name AS reviewer_name,
books.title AS book_title,
ratings.rating, ratings.rating_date
FROM reviewers 
INNER JOIN ratings ON reviewers.id = ratings.reviewer_id
INNER JOIN books ON  books.id = ratings.book_id
 