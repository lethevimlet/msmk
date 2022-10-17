{ pkgs }: {
	deps = [
    pkgs.nano
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
		pkgs.nodejs-16_x
    pkgs.sqlite
    pkgs.gcc
    pkgs.python2
	];
}