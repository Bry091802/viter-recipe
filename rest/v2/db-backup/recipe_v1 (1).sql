-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2024 at 06:16 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_title` varchar(50) NOT NULL,
  `category_datetime` int(11) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_aid`, `category_is_active`, `category_title`, `category_datetime`, `category_created`) VALUES
(1, 1, 'Chicken', 2024, 0),
(3, 1, 'Pasta', 2024, 2024),
(4, 1, 'Beef', 2024, 2024);

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `level_aid` int(11) NOT NULL,
  `level_is_active` tinyint(1) NOT NULL,
  `level_title` varchar(20) NOT NULL,
  `level_datetime` int(11) NOT NULL,
  `level_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`level_aid`, `level_is_active`, `level_title`, `level_datetime`, `level_created`) VALUES
(1, 1, 'Easy', 2024, 0);

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `recipe_aid` int(11) NOT NULL,
  `recipe_title` varchar(50) NOT NULL,
  `recipe_category_id` int(11) NOT NULL,
  `recipe_level_id` int(11) NOT NULL,
  `recipe_serving` int(10) NOT NULL,
  `recipe_prep_time` varchar(20) NOT NULL,
  `recipe_image` varchar(20) NOT NULL,
  `recipe_ingredients` text NOT NULL,
  `recipe_description` text NOT NULL,
  `recipe_instruction` text NOT NULL,
  `recipe_is_active` tinyint(1) NOT NULL,
  `recipe_datetime` varchar(20) NOT NULL,
  `recipe_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`recipe_aid`, `recipe_title`, `recipe_category_id`, `recipe_level_id`, `recipe_serving`, `recipe_prep_time`, `recipe_image`, `recipe_ingredients`, `recipe_description`, `recipe_instruction`, `recipe_is_active`, `recipe_datetime`, `recipe_created`) VALUES
(10, 'Zuppa Toscana', 0, 0, 12, '1 hr 10 min', 'zuppa.webp', '[{\"ingredients\":\"strips thick-cut bacon, cut into 1\\/2-inch\",\"amount\":\"4\",\"unit\":\"pieces\"},{\"ingredients\":\"sweet Italian sausage, casings removed \",\"amount\":\"1\",\"unit\":\"pound\"},{\"ingredients\":\"unpeeled and cut into 1\\/2-inch cubes \",\"amount\":\"4\\/5\",\"unit\":\"pieces\"},{\"ingredients\":\"cloves garlic, minced\",\"amount\":\"3\",\"unit\":\"pieces\"},{\"ingredients\":\"large white onion, diced   \",\"amount\":\"1\",\"unit\":\"piece\"}]', 'We’re so smitten with Olive Garden\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s Zuppa Toscana that our recipe developers made their own version. Food Network Kitchen’s copycat recipe is hearty and satisfying, and you can customize it by switching up some of the ingredients.', '##### Step 1\n\nCook the bacon in a large **Dutch** oven over medium-high heat, stirring occasionally, until crisp, about 6 minutes. Transfer to a paper towel-lined plate with a slotted spoon; set aside to drain. Add the Italian sausage to the drippings and cook, breaking it up with a wooden spoon, until browned and no longer pink, about 6 minutes. Transfer to the paper towel-lined plate to drain.\n\n##### Step 2\n\n Add the potatoes, garlic and onion to the drippings and cook, stirring occasionally, until slightly softened, 6 to 8 minutes. Season with the crushed red pepper flakes and salt and pepper. Add the chicken broth, increase the heat to high and bring to a boil. Reduce the heat to medium-low and simmer until the potatoes are tender and cooked through, 12 to 15 minutes.   \n\n##### Step 3\n\nAdd the kale, heavy cream, bacon and sausage and cook over medium heat until the kale is tender, another 5 minutes. Stir in the vinegar just before serving.\n\n\n\n\n\n![Tux, the Linux mascot](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WCMnCLZ40pPoM7QJa-Fc7T8k0RfqsjPQQw&s)', 1, '2024-12-04 15:04:03', '2024-12-04 12:54:40'),
(11, 'Cranberry Brie Bite', 0, 0, 10, '55 min', 'appetizer.webp', '[{\"ingredients\":\"large egg\",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\" 8-ounce wheel Brie \",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\" 17.25-ounce package frozen puff pastry (2 sheets), thawed \",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\"All-purpose flour, for dusting \",\"amount\":\"\",\"unit\":\"\"},{\"ingredients\":\"whole-berry cranberry sauce \",\"amount\":\"1\\/3\",\"unit\":\"cup\"},{\"ingredients\":\"walnuts, finely chopped \",\"amount\":\"1\\/4\",\"unit\":\"cup\"},{\"ingredients\":\" fresh thyme leaves \",\"amount\":\"1\",\"unit\":\"tbs\"}]', 'Baked Brie gets dressed up for the holidays, stuffed into little golden parcels of puff pastry, along with a hit of cranberry sauce and the crunch of walnuts.', '1. Preheat the oven to 425 degrees F and line 2 baking sheets with parchment paper.\n\n2. Whisk together the egg with 1 tablespoon of water in a small bowl for an egg wash. Cut the side rind off the Brie, then cut the Brie into 32 even pieces. Set aside.\n \n3. Unfold a puff pastry sheet on a lightly floured surface. Roll out into a 13-inch square. Cut into 16 squares. Repeat with the second sheet so you have 32 squares total. \n\n4. Top a pastry square with about 1/2 teaspoon cranberry sauce, 1/4 teaspoon walnuts, a piece of Brie and a pinch of thyme.  \n5. Use your finger or a pastry brush to brush the edges of the pastry square with egg wash until lightly coated and tacky. Pinch 2 opposite points together, then pinch the remaining 2 points together so that you have a little package. Repeat with the remaining pastry squares and filling. \n\n6. Transfer the pouches to the prepared baking sheets and brush with the remaining egg wash. Bake until puffed and golden brown, 15 to 20 minutes.', 1, '2024-12-12 10:22:54', '2024-12-04 12:59:12'),
(14, 'Cranberry Brie Bites', 0, 0, 10, '55 min', 'appetizer.webp', '[{\"ingredients\":\"large egg\",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\" 8-ounce wheel Brie \",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\" 17.25-ounce package frozen puff pastry (2 sheets), thawed \",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\"All-purpose flour, for dusting \",\"amount\":\"\",\"unit\":\"\"},{\"ingredients\":\"whole-berry cranberry sauce \",\"amount\":\"1\\/3\",\"unit\":\"cup\"},{\"ingredients\":\"walnuts, finely chopped \",\"amount\":\"1\\/4\",\"unit\":\"cup\"},{\"ingredients\":\" fresh thyme leaves \",\"amount\":\"1\",\"unit\":\"tbs\"}]', 'Baked Brie gets dressed up for the holidays, stuffed into little golden parcels of puff pastry, along with a hit of cranberry sauce and the crunch of walnuts.', '1. Preheat the oven to 425 degrees F and line 2 baking sheets with parchment paper.\r\n\r\n2. Whisk together the egg with 1 tablespoon of water in a small bowl for an egg wash. Cut the side rind off the Brie, then cut the Brie into 32 even pieces. Set aside.\r\n \r\n3. Unfold a puff pastry sheet on a lightly floured surface. Roll out into a 13-inch square. Cut into 16 squares. Repeat with the second sheet so you have 32 squares total. \r\n\r\n4. Top a pastry square with about 1/2 teaspoon cranberry sauce, 1/4 teaspoon walnuts, a piece of Brie and a pinch of thyme.  \r\n5. Use your finger or a pastry brush to brush the edges of the pastry square with egg wash until lightly coated and tacky. Pinch 2 opposite points together, then pinch the remaining 2 points together so that you have a little package. Repeat with the remaining pastry squares and filling. \r\n\r\n6. Transfer the pouches to the prepared baking sheets and brush with the remaining egg wash. Bake until puffed and golden brown, 15 to 20 minutes.', 1, '2024-12-04 13:01:26', '2024-12-04 12:59:12'),
(15, 'Cranberry Brie Bites', 0, 0, 10, '55 min', 'appetizer.webp', '[{\"ingredients\":\"large egg\",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\" 8-ounce wheel Brie \",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\" 17.25-ounce package frozen puff pastry (2 sheets), thawed \",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\"All-purpose flour, for dusting \",\"amount\":\"\",\"unit\":\"\"},{\"ingredients\":\"whole-berry cranberry sauce \",\"amount\":\"1\\/3\",\"unit\":\"cup\"},{\"ingredients\":\"walnuts, finely chopped \",\"amount\":\"1\\/4\",\"unit\":\"cup\"},{\"ingredients\":\" fresh thyme leaves \",\"amount\":\"1\",\"unit\":\"tbs\"}]', 'Baked Brie gets dressed up for the holidays, stuffed into little golden parcels of puff pastry, along with a hit of cranberry sauce and the crunch of walnuts.', '1. Preheat the oven to 425 degrees F and line 2 baking sheets with parchment paper.\r\n\r\n2. Whisk together the egg with 1 tablespoon of water in a small bowl for an egg wash. Cut the side rind off the Brie, then cut the Brie into 32 even pieces. Set aside.\r\n \r\n3. Unfold a puff pastry sheet on a lightly floured surface. Roll out into a 13-inch square. Cut into 16 squares. Repeat with the second sheet so you have 32 squares total. \r\n\r\n4. Top a pastry square with about 1/2 teaspoon cranberry sauce, 1/4 teaspoon walnuts, a piece of Brie and a pinch of thyme.  \r\n5. Use your finger or a pastry brush to brush the edges of the pastry square with egg wash until lightly coated and tacky. Pinch 2 opposite points together, then pinch the remaining 2 points together so that you have a little package. Repeat with the remaining pastry squares and filling. \r\n\r\n6. Transfer the pouches to the prepared baking sheets and brush with the remaining egg wash. Bake until puffed and golden brown, 15 to 20 minutes.', 1, '2024-12-04 13:01:26', '2024-12-04 12:59:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`level_aid`);

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`recipe_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
