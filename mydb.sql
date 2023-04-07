--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: mydb; Type: TABLE; Schema: public; Owner: nikita
--

CREATE TABLE public.mydb (
    id integer NOT NULL,
    "Title" text,
    "Description" text
);


ALTER TABLE public.mydb OWNER TO nikita;

--
-- Name: mydb_id_seq; Type: SEQUENCE; Schema: public; Owner: nikita
--

CREATE SEQUENCE public.mydb_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mydb_id_seq OWNER TO nikita;

--
-- Name: mydb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nikita
--

ALTER SEQUENCE public.mydb_id_seq OWNED BY public.mydb.id;


--
-- Name: mydb id; Type: DEFAULT; Schema: public; Owner: nikita
--

ALTER TABLE ONLY public.mydb ALTER COLUMN id SET DEFAULT nextval('public.mydb_id_seq'::regclass);


--
-- Data for Name: mydb; Type: TABLE DATA; Schema: public; Owner: nikita
--

COPY public.mydb (id, "Title", "Description") FROM stdin;
1	Сдача_жилья	lorem ipsum
3	Экскурсии_по_крыму	lorem ipsum
2	Строительство_домов	Каркасно-щитовые экологически чистые дома. Быстро, Качественно, Недорого.\nРазработка 3D проекта, в наличии множество разных вариантов зданий, а также \nприветствуем индивидуальные заказы. Мы работаем только с качественным материалом. \nИ гарантируем ответственную, качественную сборку с проектной документацией.
0	Продажа_недвижимости	ВАШИ ПЛЮСЫ, В ВЫБОРЕ НАС<br>\n- Облегчение вашего участия в этом процессе. \nМы предлагаем максимально подходящие по вашим критериям объекты. \nОсуществляем ведение сделки от самого начала до успешного финала на \nисключительно выгодных условиях для вас. Обеспечиваем осуществления \nбезопасной сделки относительно действующего законодательства \nгосударства.<br>\nЧТО МЫ МОЖЕМ ПРЕДЛОЖИТЬ<br>\nАгентство недвижимости ?????? — все риэлторские услуги: купля, \nпродажа, обмен, аренда жилой и коммерческой недвижимости в КРЫМУ, помощь \nв получении ипотеки. Защита интересов наших клиентов и юридическая \nчистота проводимых сделок.<br>\nДЛЯ НАС ВАЖЕН КАЖДЫЙ КЛИЕНТ<br>\nКаждому клиенту мы предоставляем его персонального риэлтора. \nСпециалист на всех этапах купли-продажи недвижимости будет курировать \nпроцесс работы, держать клиента в курсе дел и заранее напоминать о \nнеобходимости подготовки тех или иных документов. Персональный риэлтор, \nтаким образом, отвечает за успешную подготовку к сделке и ее проведение.
\.


--
-- Name: mydb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nikita
--

SELECT pg_catalog.setval('public.mydb_id_seq', 1, false);


--
-- Name: mydb mydb_pkey; Type: CONSTRAINT; Schema: public; Owner: nikita
--

ALTER TABLE ONLY public.mydb
    ADD CONSTRAINT mydb_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

