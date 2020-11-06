1) 2009년도에 데뷔한 걸그룹 정보를 조회
(where debut between ‘2009-01-01’ and ‘2009-12-31’ 이용)
(조회됨 ggid/name/debut/hit_song_id)
SELECT * FROM girl_group
 WHERE debut BETWEEN '2009-01-01' AND '2009-12-31';

2) 2009년도에 데뷔한 걸그룹의 히트송은?
(걸그룹 이름, 데뷔일, 히트송)
	SELECT hsid AS id, NAME, debut, title
	  FROM song LEFT JOIN girl_group
	  ON song.hsid = girl_group.hit_song_id
     WHERE debut BETWEEN '2009-01-01' AND '2009-12-31';	 
			#(id/name/debut/title)
			#카라-2009.07.30 미스터
			#다비치-2009.02.27 8282
			#2NE1-2009.07.08 I Don't car


3) 대륙별로 국가숫자, GNP의 합, 평균 국가별 GNP는?
SELECT continent, COUNT(*), SUM(GNP), AVG(GNP) 
  FROM country
  GROUP BY continent;

4) 아시아 대륙에서 인구가 가장 많은 도시 10개를 내림차순으로 보여줄 것
(대륙명, 국가명, 도시명, 인구수)
select * from 
order by population  desc
limit 10

SELECT country.Continent, country.Name AS country, city.Name AS city, city.Population FROM country

JOIN city
ON country.code = city.countrycode
WHERE country.continent= 'asia'
ORDER BY city.population DESC 
LIMIT 10;
5) 전 세계에서 인구가 가장 많은 10개 도시에서 사용하는 공식언어는?
(도시명, 인구수, 언어명)

SELECT city.Name, city.population, countrylanguage.Language FROM city
	INNER JOIN countrylanguage
	ON city.CountryCode = countrylanguage.CountryCode
	WHERE countrylanguage.IsOfficial='T'
	ORDER BY city.Population DESC 
	LIMIT 10;