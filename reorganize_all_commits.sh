#!/bin/bash
set -e

echo "🔄 Reorganizando TODOS los commits desde hace mes y medio..."
echo "⚠️  Esto reescribirá completamente el historial"
echo ""

# Fecha base: hace 45 días (aproximadamente 25 de septiembre 2024)
BASE_DATE="2024-09-25"

# Obtener todos los commits
TOTAL_COMMITS=$(git rev-list --count HEAD)
echo "Total de commits a reorganizar: $TOTAL_COMMITS"
echo ""

# Crear un backup branch por si acaso
git branch backup-before-reorganize-$(date +%Y%m%d-%H%M%S) 2>/dev/null || true
echo "✅ Backup branch creado"
echo ""

# Obtener todos los commits en orden inverso (más antiguos primero)
COMMITS=($(git log --reverse --format="%H" HEAD))

echo "Iniciando reorganización con fechas desde $BASE_DATE..."
echo "Esto puede tomar varios minutos..."
echo ""

# Crear script para filter-branch que asigne fechas progresivas
git filter-branch -f --env-filter "
    COMMIT_HASH=\$GIT_COMMIT
    
    # Encontrar el índice del commit
    INDEX=0
    for i in \"\${COMMITS[@]}\"; do
        if [ \"\$i\" = \"\$COMMIT_HASH\" ]; then
            break
        fi
        INDEX=\$((INDEX + 1))
    done
    
    # Calcular días desde la fecha base (distribuir commits a lo largo de 45 días)
    DAYS_AGO=\$((45 - (INDEX * 45 / $TOTAL_COMMITS)))
    if [ \$DAYS_AGO -lt 1 ]; then
        DAYS_AGO=1
    fi
    
    # Generar fecha (usar date command)
    NEW_DATE=\$(date -v-\${DAYS_AGO}d \"+%Y-%m-%d %H:%M:%S\" 2>/dev/null || date -d \"\$DAYS_AGO days ago\" \"+%Y-%m-%d %H:%M:%S\" 2>/dev/null || echo \"\$(date -d \"-\$DAYS_AGO days\" \"+%Y-%m-%d %H:%M:%S\" 2>/dev/null)\")
    
    if [ -n \"\$NEW_DATE\" ]; then
        export GIT_AUTHOR_DATE=\"\$NEW_DATE\"
        export GIT_COMMITTER_DATE=\"\$NEW_DATE\"
    fi
" --tag-name-filter cat -- --all

echo ""
echo "✅ Reorganización completada"
echo ""
echo "Limpiando referencias..."
git update-ref -d refs/original/refs/heads/main 2>/dev/null || true
rm -rf .git/refs/original/ 2>/dev/null || true

echo ""
echo "🎉 ¡Historial reorganizado!"
echo "Verifica con: git log --oneline --date=short --format='%h %ad %s'"

