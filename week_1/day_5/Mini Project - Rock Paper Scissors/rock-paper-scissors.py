from game import Game

def get_user_menu_choice():
    print("\nMenu:")
    print("(g) Play a new game")
    print("(s) Show scores")
    print("(q) Quit")

    choice = input("Enter your choice: ").lower()
    while choice not in ["g", "s", "q"]:
        print("Invalid choice! Please try again.")
        choice = input("Enter your choice: ").lower()
    return choice


def print_results(results):
    print("\nGame Results Summary:")
    print("----------------------")
    print(f"Wins:  {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws:  {results['draw']}")
    print("\nThanks for playing! 👋")


def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    game = Game()

    while True:
        user_choice = get_user_menu_choice()

        if user_choice == "g":
            result = game.play()
            results[result] += 1

        elif user_choice == "s":
            print_results(results)

        elif user_choice == "q":
            print_results(results)
            break


if __name__ == "__main__":
    main()